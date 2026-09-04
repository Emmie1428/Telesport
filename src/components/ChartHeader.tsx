import type { ChartHeaderProps } from '../models/types'

//Fonction réutilisable qui affiche les titres et statistiques au dessus des tableaux
function ChartHeader ({pageTitle, pageDescription, stats, footnote, chart}: ChartHeaderProps) {  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          {pageTitle}
        </h1>
        
        <div className="mb-8">
          <p className="text-lg">
            {pageDescription}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[220px] rounded-lg bg-gray-800 p-5 text-center shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold">{stat.label}</h3>
              <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mb-4">{chart}</div>
        <div className="text-sm text-gray-400">
          <p>{footnote}</p>
        </div>
      </div>
    </div>
  )
}

export default ChartHeader
