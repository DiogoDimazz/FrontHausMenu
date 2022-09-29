import './styles.css'
import search from '../../assets/search.svg'
import { useState } from 'react'

export default function SearchInput() {
    const [productSearch, setProductSearch] = useState()

    function handleChange({ target }) {
        setProductSearch(target.value)
    }


    return (
        <div className='filter-select'>
            <input
                type='text'
                className='filter-select-box'
                placeholder='Digite o produto'
                value={productSearch}
                onChange={handleChange}
            />
            <img
                src={search} alt='arrow'
                className='filter-arrow'
            />
        </div>
    )
}