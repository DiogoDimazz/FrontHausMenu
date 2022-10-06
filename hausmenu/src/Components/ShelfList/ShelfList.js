import './styles.css'
import sections from '../../Lists/Sections'
import ShelfSectionList from '../ShelfSectionList/shelfSectionList'
import { useEffect, useState } from 'react'

export default function ShelfList() {
    const [allSections, setAllSections] = useState([...sections])


    useEffect(() => {

    }, [])

    return (
        <section className='product-list'>
            {allSections.map((sect) => (
                <div key={sect.id}>
                    <ShelfSectionList sect={sect} />
                </div>
            ))}
        </section>
    )
}