import type { ChartHeaderProps } from '../models/types'

//Fonction réutilisable qui affiche les titres et statistiques au dessus des tableaux
function ChartHeader ({pageTitle, pageDescription, stats, footnote, chart}: ChartHeaderProps) {  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          {pageTitle}
        </h1>
        
        <div className="mb-8">
          <p className="text-lg">
            {pageDescription}
          </p>
        </div>

        <div className="mb-2">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2"
            >
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-4xl font-bold text-blue-400">
                {stat.value}
              </p>
            </div>
          ))}
          <div>{chart}</div>
        </div>
        <div className="text-sm text-gray-400">
          <p>{footnote}</p>
        </div>
      </div>
    </div>
  )
}

export default ChartHeader
