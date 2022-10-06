import './styles.css'
import sections from '../../Lists/Sections'
import useConsumer from '../../Hooks/useConsumer'

export default function SectionsSelect() {
    const { sectionFiltered, setSectionFiltered } = useConsumer()
    const localFilter = [...sectionFiltered]
    const selectedStyle = { backgroundColor: 'var(--orange-300)', color: 'var(--white-100)' }
    const unselectedStyle = { backgroundColor: 'var(--orange-100)', color: 'var(--coffee-300)' }

    function sectionSelection(value) {
        if (localFilter.includes(value)) {
            const i = localFilter.indexOf(value)
            localFilter.splice(i, 1)
        } else {
            localFilter.push(value)
        }
        setSectionFiltered([...localFilter])
    }

    return (
        <section className='sections'>
            {sections.map(({ id, value, label }) => (
                <span
                    key={id}
                    style={sectionFiltered.includes(value) ? selectedStyle : unselectedStyle}
                    className='descriptive-bold-font section-box'
                    onClick={() => sectionSelection(value)}
                >
                    {label}
                </span>

            ))}

        </section>
    )
}