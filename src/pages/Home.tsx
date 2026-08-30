import { useState, useEffect } from 'react'
import type { Olympic } from '../models/types'
import { getAllCountriesData, getPageContent } from '../services/API'
import ChartHeader from '../components/ChartHeader'

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

    //Défini le id du contenu de page à home et vérifie la présence de données sinon erreur
    const pageContent = getPageContent("home")
        if (!pageContent) return <div>Erreur: contenu de page introuvable</div>

    // Statistiques globales
    const totalCountries = allCountries?.length || 0
    /*const totalGames = new Set(
        allCountries?.flatMap(c => c.participations.map(p => p.year))
    ).size || 0*/

    return (
        <div>
            <ChartHeader
            pageTitle={pageContent.pageTitle}
            pageDescription={pageContent.pageDescription}
            pageSubtitle={pageContent.pageSubtitle}
            dataEntry={totalCountries}
            footnote={pageContent.footnote}
             />
        </div>
    )

    
}

export default Home