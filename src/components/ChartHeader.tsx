import type { PageContent } from "../models/types"


function ChartHeader ({pageTitle, pageDescription, pageSubtitle, dataEntry, footnote}: Omit<PageContent, 'id'>) {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          {`${pageTitle}`}
        </h1>

        <div className="mb-8">
          <p className="text-lg">
            {`${pageDescription}`}
          </p>
        </div>

        <div className="mb-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2">
            <h3 className="text-xl font-semibold mb-2">{`${pageSubtitle}`}</h3>
            <p className="text-4xl font-bold text-blue-400">
              {`${dataEntry}`}
            </p>
          </div>
        </div>

        
        

        <div className="text-sm text-gray-400">
          <p>{`${footnote}`}</p>
        </div>
      </div>
    </div>
    )
}

export default ChartHeader
