import './styles.css'
import useConsumer from '../../Hooks/useConsumer'
import listaDeCompras from '../../Lists/ListaMockada'
import FilterSection from '../FilterSection/FilterSection'
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
        const sectionsObj = []
        let i = 1;

        listaDeCompras.forEach(item => {
            if (!sections.includes(item.section)) {
                const sectionObject = { id: i, section: item.section }
                i++;
                sections.push(item.section)
                sectionsObj.push({ ...sectionObject });
            }
        })
        setSectionsToGo(sectionsObj)
    }

    useEffect(() => {
        getSections()

        //eslint-disable-next-line
    }, [groceries])

    return (
        <main className='list-main'>
            <section className='list-filter'>
                <FilterSection />
            </section>
            <section className='list-notepad'>
                <div className='list-title cursive-text'>Lista de Compras</div>
                {
                    sectionsToGo.map((section) => (
                        <div key={section.id} className='list-writable'>
                            <MarketSection section={section} />
                        </div>
                    ))
                }
            </section>
        </main>
    )
}

export default ListPage