import './styles.css'
import sections from '../../Lists/Sections'
import arrow from '../../assets/arrow.svg'

export default function FilterSection() {

    return (
        <section className='filter-main'>
            <div className='filter-select'>
                <input
                    type='text'
                    className='filter-select-box'
                    placeholder='Escolha a seção'
                />
                <img src={arrow} alt='arrow' className='filter-arrow' />
            </div>
        </section>
    )
}