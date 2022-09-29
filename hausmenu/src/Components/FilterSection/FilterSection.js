import './styles.css'
import SearchInput from '../SearchInput/SearchInput'
import SectionsSelect from '../SectionsSelect/SectionsSelect'
import ProductList from '../ProductList/ProductList'

export default function FilterSection() {

    return (
        <section className='filter-main'>
            <SearchInput />
            <SectionsSelect />
            <ProductList />
        </section>
    )
}