import { useState, useEffect } from 'react'
import type { Olympic } from '../models/types'
import { getAllCountriesData } from '../services/API'

function Home() {
    const [allCountries, setAllCountries] = useState<Olympic[] | null>(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        async function fetchAllCountries() {
            const data = await getAllCountriesData()
            
            if (!data) {
                setHasError(true)
                return
            }
            
            setAllCountries(data as Olympic[])
            setIsLoaded(true)
        }
        
        fetchAllCountries()
    }, [])

    if (hasError) return <div>Erreur lors du chargement des données</div>
    if (!isLoaded) return <div>Chargement...</div>

    // Statistiques globales
    const totalCountries = allCountries?.length || 0
    const totalGames = new Set(
        allCountries?.flatMap(c => c.participations.map(p => p.year))
    ).size || 0

    return (
        <div>
            <h1>Dashboard Olympique</h1>
            <div>
                <p>Pays participants: {totalCountries}</p>
                <p>Jeux olympiques: {totalGames}</p>
            </div>
            {/* Pie chart avec allCountries */}
        </div>
    )

    
}

export default Home