import { useNavigate } from 'react-router-dom'
import { Pie } from 'react-chartjs-2'
import type { MedalsChartData, Olympic } from '../models/types'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type ActiveElement,
} from 'chart.js'
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

interface MedalsChartProps {
  data: MedalsChartData
  countries: Olympic[]
}

//Déclaration du css qui doit être utilisé
const CHART_COLORS = {
  backgroundColor: [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
  ],
  borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
  ]
}



  //Ajout du style aux données
export default function MedalsChart({ data, countries }: MedalsChartProps) {
  const navigate = useNavigate()

  const chartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white',
        },
      },
    },
    onClick: (_event, elements: ActiveElement[]) => {
      if (elements.length === 0) return

      const clickedIndex = elements[0].index
      const selectedCountry = countries[clickedIndex]

      if (selectedCountry) {
        navigate(`/country/${selectedCountry.id}`)
      }
    },
  }

  const dataWithStyles = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: CHART_COLORS.backgroundColor,
      borderColor: CHART_COLORS.borderColor,
      borderWidth: 1,
    })),
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <h2 className="mb-4 text-center text-xl font-semibold text-white">Total des médailles par pays</h2>
      <div style={{ height: '400px' }}>
        <Pie data={dataWithStyles} options={chartOptions} />
      </div>
    </div>
  )
}
