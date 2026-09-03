import { Line } from 'react-chartjs-2'
import type { CountryChartData } from '../models/types'
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from 'chart.js'

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
) 
 
interface CountryChartProps {
  data: CountryChartData
}

const CHART_COLORS = {
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  borderColor: 'rgb(75, 192, 192)',
}

const evolutionOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'white',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
    },
    y: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
    },
  },
}
    
export default function CountryChart({ data }: CountryChartProps) {
    const dataWithStyles: CountryChartData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: CHART_COLORS.backgroundColor,
        borderColor: CHART_COLORS.borderColor,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
    })),
    }

    return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
        <div style={{ height: '400px' }}>
        <Line data={dataWithStyles} options={evolutionOptions} />
        </div>
    </div>
    )
}