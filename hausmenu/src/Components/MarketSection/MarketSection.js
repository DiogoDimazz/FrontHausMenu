import './styles.css'
import React, { useEffect, useRef, useState } from 'react'
import listaDeCompras from '../../Lists/ListaMockada'

export default function MarketSection({ section }) {
    const [sectionItens, setSectionItens] = useState([]);
    const listRef = useRef(null)
    const spanRef = useRef(null)
    const itemRef = useRef(null)

    function getSectionItens() {
        const local = []
        listaDeCompras.forEach(item => {
            if (item.section === section.section) {
                local.push(item)
            }
        })
        setSectionItens(local);
    }

    function showTag() {
        spanRef.current.classList.remove('hidden')
    }

    function hideTag() {
        spanRef.current.classList.add('hidden')

    }

    function showHideItems() {
        listRef.current.classList.toggle('hidden')
    }

    function crossItem(id) {
        document.getElementById(id).classList.toggle('cross')
    }

    function showBox(item) {
        const data = document.getElementsByName(item)
        if (!data[0]) return;
        data[0].classList.remove('hidden')
    }

    function hideBox(item) {
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
    }, [])

    return (
        <section className='section-content'>
            <h5
                className='section-title larger-text'
                onMouseOver={showTag}
                onMouseLeave={hideTag}
                onClick={showHideItems}
            >
                {section.section}
                <span ref={spanRef} className='hide-show-text hidden'>(show/hide items)</span>
            </h5>
            <ul className='section-list' ref={listRef}>
                {sectionItens.map(item => (
                    <div className='section-item-line'>

                        <li
                            className='section-item descriptive-font'
                            key={item.id}
                            id={item.id}
                            ref={itemRef}
                            onClick={() => crossItem(item.id)}
                            onMouseOver={() => showBox(item.item)}
                            onMouseOut={() => hideBox(item.item)}
                        >
                            {item.item}
                            {item.quantity &&
                                <span className='item-quantity'> ({item.quantity})</span>
                            }
                        </li>
                        {item.substitution &&
                            <span className='little-box hidden' name={item.item} >
                                - OU {item.substitution}
                            </span>
                        }
                    </div>
                ))}
            </ul>
        </section >
    )
}