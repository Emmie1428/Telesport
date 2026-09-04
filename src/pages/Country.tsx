import { useParams, Navigate, NavLink } from 'react-router-dom'
import type { StatItem, CountryChartData } from '../models/types'
import useData from '../hooks/useData'
import ChartHeader from '../components/ChartHeader'
import CountryChart from '../components/CountryChart'

function Country () {
  const { id } = useParams<{id: string}>()
  const { loading, error, getCountryById, getPageContentById } = useData()

      if (error) return <div>{error}</div>
      if (loading) return <div>Chargement...</div>
      if (!id) return <div>Erreur: contenue de pahe introuvable</div>

  //Défini le id du contenu de page à home et vérifie la présence de données sinon erreur
  const pageContent = getPageContentById('country')
      if (!pageContent) return <div>Erreur : contenu de page introuvable</div>
  
  const countryId = Number(id)
      if (Number.isNaN(countryId)) {
      return <div>Erreur : id invalide</div>
  }
  const country = getCountryById(countryId)
    if (!country) return <Navigate to="/error"/>
    
// Calculs
  const totalMedals = country.participations.reduce(
    (sum, participation) => sum + participation.medalsCount,
    0
  )

  const totalAthletes = country.participations.reduce(
    (sum, participation) => sum + participation.athleteCount,
    0
  )

  const totalParticipations = country.participations.length

  // Données pour le chart
  const chartData: CountryChartData = {
    labels: country.participations.map((participation) =>
      participation.year.toString()
    ),
    datasets: [
      {
        label: 'Nombre de médailles',
        data: country.participations.map(
          (participation) => participation.medalsCount
        ),
      },
    ],
  }

    //Associe la valeur au label
  const statValues: Record<string, number> = {
    totalMedals,
    totalAthletes,
    totalParticipations
  }

  const stats: StatItem[] = pageContent.stats.map((stat) => ({
    label: stat.label,
    value: statValues[stat.key] ?? 0,
  }))

  return (
    <div className="bg-gray-900">
      <ChartHeader
      pageTitle={country.country}
      pageDescription={pageContent.pageDescription}
      stats={stats}
      chart={<CountryChart data={chartData}/>}
      footnote={pageContent.footnote}
      />
      <div className="flex justify-center pb-8">
        <NavLink className="inline-block rounded-md bg-blue-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-600"
          to="/">
          Retour à l’accueil
        </NavLink>
      </div>
    </div>
  )    
}

export default Country