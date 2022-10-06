import './styles.css'
import React, { useEffect, useRef, useState } from 'react'
import useConsumer from '../../Hooks/useConsumer';

export default function MarketSection({ section }) {
    const { groceries } = useConsumer()
    const [sectionItens, setSectionItens] = useState([]);
    const listRef = useRef(null)

    function getSectionItens() {
        const local = []
        groceries.forEach(item => {
            if (item.section === section.section) {
                local.push(item)
            }
        })
        setSectionItens(local);
    }

    function showHideItems() {
        listRef.current.classList.toggle('hidden')
    }

    function crossItem(id) {
        document.getElementById(id).classList.toggle('cross')
    }

    function showBtns(item) {
        const data = document.getElementsByName(item)
        if (!data[0]) return;
        data[0].classList.remove('hidden')
    }

    function hideBtns(item) {
        const data = document.getElementsByName(item)
        if (!data[0]) return;
        data[0].classList.add('hidden')
    }

    useEffect(() => {
        getSectionItens()
        return () => {
            setSectionItens([])
        }
        //eslint-disable-next-line
    }, [groceries])

    return (
        <section className='section-content'>
            <h5
                className='section-title larger-text'
                onClick={showHideItems}
            >
                {section.section}
                <span className='hide-show-text hidden'>(show/hide items)</span>
            </h5>
            <ul className='section-list' ref={listRef}>
                {sectionItens.map(item => (
                    <div
                        className='section-item-line'
                        key={item.id}
                        onMouseOver={() => showBtns(item.item)}
                        onMouseOut={() => hideBtns(item.item)}
                    >
                        <li
                            className='section-item descriptive-font'
                            key={item.id}
                            id={item.id}
                            onClick={() => crossItem(item.id)}

                        >
                            {item.item}
                            {item.quantity &&
                                <span className='item-quantity'> ({item.quantity})</span>
                            }
                        </li>
                        <span name={item.item} className='item-btns hidden'>
                            <button className='small-btn remove-item'>remover item</button>
                            <button className='small-btn add-obs'>observações</button>
                        </span>
                        {/* {item.substitution &&
                            <span className='little-box hidden' name={item.item} >
                                - OU {item.substitution}
                            </span>
                        } */}
                    </div>
                ))}
            </ul>
        </section >
    )
}