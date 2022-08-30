import './styles.css'
import useConsumer from '../../Hooks/useConsumer'

function ListPage() {
    const { groceries, setGroceries } = useConsumer()


    return (
        <main className='list-main'>
            <section className='list-notepad'>
                <div className='list-title'>Lista de Compras - definir fonte</div>
                <ul className='list-items'></ul>
            </section>
            <section className='list-filter'>Fazer listagem das seções do supermercado</section>
        </main>
    )
}

export default ListPage