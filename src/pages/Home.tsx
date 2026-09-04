import type { Olympic, MedalsChartData, StatItem } from '../models/types'
import useData from '../hooks/useData'
import ChartHeader from '../components/ChartHeader'
import MedalsChart from '../components/MedalsChart'


function Home() {
  const { allCountries, loading, error, getPageContentById } = useData()

    if (error) return <div>{error}</div>
    if (loading) return <div>Chargement...</div>

    //Défini le id du contenu de page à home et vérifie la présence de données sinon erreur
  const pageContent = getPageContentById('home')
    if (!pageContent) return <div>Erreur : contenu de page introuvable</div>

 // Statistiques globales
    const totalCountries = allCountries?.length
    const totalGamesEditions = 5

  // Calcul le nombre de médailles total par pays pour MedalsChart
  const calculateTotalMedals = (country: Olympic) => {
    return country.participations.reduce(
      (sum, participation) => sum + participation.medalsCount,
      0,
    )
  }

  // Données pour le chart
  const chartData: MedalsChartData = {
    labels: allCountries!.map((country) => country.country),
    datasets: [
      {
        label: 'Total des médailles',
        data: allCountries.map((country) => calculateTotalMedals(country)),
      },
    ],
  }

  //Associe la valeur au label
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
            chart={<MedalsChart data={chartData} countries={allCountries}/>}
            footnote={pageContent.footnote}
            />
              
        </div>
    )
}

export default Home