import { useState, useEffect } from 'react'
import type { Olympic, MedalsChartData, StatItem } from '../models/types'
import { getAllCountriesData, getPageContent } from '../services/API'
import ChartHeader from '../components/ChartHeader'
import MedalsChart from '../components/MedalsChart'


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
    const totalGamesEditions = 5

  // Calcul identique à l'original
  const calculateTotalMedals = (country: Olympic) => {
    return country.participations.reduce(
      (sum, p) => sum + p.medalsCount,
      0,
    )
  }

  // Données pour le chart
  const chartData: MedalsChartData = {
    labels: allCountries!.map((d) => d.country),
    datasets: [
      {
        label: 'Total des médailles',
        data: allCountries!.map((d) => calculateTotalMedals(d)),
      },
    ],
  }

  const statValues: Record<string, number> = {
    totalCountries,
    totalGamesEditions,
  }

  const stats: StatItem[] = pageContent.stats.map((stat) => ({
    label: stat.label,
    value: statValues[stat.key] ?? 0,
  }))

  return (
        <div>
            <ChartHeader
            pageTitle={pageContent.pageTitle}
            pageDescription={pageContent.pageDescription}
            stats={stats}
            chart={<MedalsChart data={chartData}/>}
            footnote={pageContent.footnote}
            />
              
        </div>
    )
}

export default Home