import './styles.css'
import Select from 'react-select'
import sections from '../../Lists/Sections'

export default function FilterSection() {




    return (
        <section className='filter-main'>
            <Select
                defaultInputValue={[sections[0], sections[2]]}
                isMulti
                name='sections'
                options={sections}
                placeholder='Escolha a seção'
                className='basic-multi-select'
                classNamePrefix="select"
                closeMenuOnSelect={false}
            />
        </section>
    )
}