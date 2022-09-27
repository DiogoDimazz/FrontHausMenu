import './styles.css'
import sections from '../../Lists/Sections'
import arrow from '../../assets/arrow.svg'
import close from '../../assets/close.svg'
import useConsumer from '../../Hooks/useConsumer'
import { useState } from 'react'

export default function FilterSection() {
    const { sectionFiltered, setSectionFiltered } = useConsumer()
    const [openFilterMenu, setOpenFilterMenu] = useState(false)
    const localFilter = [...sectionFiltered]

    function sectionSelection(e) {
        if (localFilter.includes(e.target.innerText)) return;
        localFilter.push(e.target.innerText)
        setSectionFiltered([...localFilter])
    }

    function removeSelection(e) {
        const toRemove = localFilter.indexOf(e.target.name)
        localFilter.splice(toRemove, 1)
        setSectionFiltered([...localFilter])
    }

    return (
        <section className='filter-main'>
            <div className='filter-select'>
                {sectionFiltered.length > 0
                    ?
                    <div className='input-like-div'>
                        {
                            sectionFiltered.map((selection, index) => (
                                <span
                                    key={index}
                                    className='selected tiny-font'
                                >
                                    {selection}
                                    <span className='close-selected-box'>
                                        <img
                                            name={selection}
                                            src={close}
                                            alt='fechar'
                                            className='remove-selected'
                                            onClick={removeSelection}
                                        />
                                    </span>
                                </span>
                            ))
                        }
                    </div>
                    :
                    <input
                        type='text'
                        className='filter-select-box'
                        placeholder='Escolha a seção'
                        value={sectionFiltered}
                    />
                }
                <img
                    src={arrow} alt='arrow'
                    className='filter-arrow'
                    onClick={() => setOpenFilterMenu(!openFilterMenu)}
                />
            </div>
            {openFilterMenu &&
                <ul className='filter-menu'>
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            className='section-menu descriptive-bold-font'
                            onClick={sectionSelection}
                        >{section.value}</li>
                    ))}
                </ul>
            }
        </section>
    )
}