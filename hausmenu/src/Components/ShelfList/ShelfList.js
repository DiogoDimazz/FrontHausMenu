import './styles.css'
import allProducts from '../../Lists/ListaMockada'
import { useState } from 'react'
import useConsumer from '../../Hooks/useConsumer'

export default function ShelfList() {
    const { groceries, setGroceries } = useConsumer()
    const localGroceries = [...groceries]
    const [listedProducts, setListedProducts] = useState([...allProducts])

    function pickGrocerie(product) {
        localGroceries.push(product);
        setGroceries(localGroceries)

        const toRemove = listedProducts.indexOf(product)
        listedProducts.splice(toRemove, 1)
    }

    return (
        <section className='product-list'>
            {listedProducts.map((product) => (
                <li
                    key={product.id}
                    className='descriptive-font shelf-items'
                    onClick={() => pickGrocerie(product)}
                >
                    {product.item}
                </li>
            ))}
        </section>
    )
}