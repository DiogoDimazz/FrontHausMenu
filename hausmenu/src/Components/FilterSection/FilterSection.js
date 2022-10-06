import './styles.css'
import SearchInput from '../SearchInput/SearchInput'
import SectionsSelect from '../SectionsSelect/SectionsSelect'
import ShelfList from '../ShelfList/ShelfList'

export default function FilterSection() {

    return (
        <section className='filter-main'>
            <SearchInput />
            <SectionsSelect />
            <ShelfList />
        </section>
    )
}