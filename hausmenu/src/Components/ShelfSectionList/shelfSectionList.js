import './styles.css'
import useConsumer from '../../Hooks/useConsumer'
import { useState, useRef, useEffect } from 'react'
import sections from '../../Lists/Sections'
import allProducts from '../../Lists/ListaMockada'


export default function ShelfSectionList({ sect }) {
    const { groceries, setGroceries } = useConsumer()
    const localGroceries = [...groceries]
    const [listedProducts, setListedProducts] = useState([...allProducts])
    const [allSections, setAllSections] = useState([...sections])
    const shelfRef = useRef(null);


    function pickGrocerie(product) {
        localGroceries.push(product);
        setGroceries(localGroceries)

        const toRemove = listedProducts.indexOf(product)
        listedProducts.splice(toRemove, 1)
    }


    function showHideShelf() {
        shelfRef.current.classList.toggle('hidden')
    }

    useEffect(() => {

    }, [])

    return (
        <div key={sect.id}>
            <div
                className='section-grouping descriptive-bold-font'
                onClick={showHideShelf}
            >
                {sect.label}
            </div>
            <ul ref={shelfRef}>
                {listedProducts.map((product) => (
                    sect.label === product.section &&
                    <li
                        key={product.id}
                        className='descriptive-font shelf-items'
                        onClick={() => pickGrocerie(product)}
                    >
                        {product.item}
                    </li>
                ))}
            </ul>
        </div>
    )
}