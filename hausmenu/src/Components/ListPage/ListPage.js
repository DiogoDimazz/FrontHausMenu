import './styles.css'
import useConsumer from '../../Hooks/useConsumer'
import listaDeCompras from './ListaMockada'
import MarketSection from '../MarketSection/MarketSection'
import { useEffect, useState } from 'react'

function ListPage() {
    const { groceries, setGroceries } = useConsumer()
    const [sectionsToGo, setSectionsToGo] = useState([])

    // function cross(e) {
    //     const grocerie = document.getElementById(e.id)
    //     grocerie.classList.toggle("grocerie-checked")
    // }

    function getSections() {
        const sections = []
        listaDeCompras.forEach(item => {
            if (!sections.includes(item.section)) {
                sections.push(item.section)
            }
        })

        setSectionsToGo(sections)
    }

    useEffect(() => {
        getSections()

        //eslint-disable-next-line
    }, [groceries])

    return (
        <main className='list-main'>
            <section className='list-notepad'>
                <div className='list-title cursive-text'>Lista de Compras</div>
                {
                    sectionsToGo.map((section, index) => (
                        <div className='list-section' key={index}>
                            <MarketSection section={section} />
                        </div>
                    ))
                }
            </section>
            <section className='list-filter'>Fazer listagem das seções do supermercado</section>
        </main>
    )
}

export default ListPage