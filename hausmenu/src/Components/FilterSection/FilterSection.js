import './styles.css'
import sections from '../../Lists/Sections'
import arrow from '../../assets/arrow.svg'
import useConsumer from '../../Hooks/useConsumer'
import { useState } from 'react'

export default function FilterSection() {
    const { sectionFiltered, setSectionFiltered } = useConsumer()
    const [openFilterMenu, setOpenFilterMenu] = useState(false)

    return (
        <section className='filter-main'>
            <div className='filter-select'>
                <input
                    type='text'
                    className='filter-select-box'
                    placeholder='Escolha a seção'
                    value={sectionFiltered}
                />
                <img
                    src={arrow} alt='arrow'
                    className='filter-arrow'
                    onClick={() => setOpenFilterMenu(!openFilterMenu)}
                />
            </div>
            {openFilterMenu &&
                <ul className='filter-menu descriptive-font'>
                    {sections.map((section) => (
                        <li>{section.value}</li>
                    ))}
                </ul>
            }
        </section>
    )
}