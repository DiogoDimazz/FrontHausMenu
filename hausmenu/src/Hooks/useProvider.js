import { useState } from "react"


function useProvider() {
    const [groceries, setGroceries] = useState()
    const [sectionFiltered, setSectionFiltered] = useState([])

    return {
        groceries, setGroceries,
        sectionFiltered, setSectionFiltered
    }
}

export default useProvider;