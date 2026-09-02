import { useEffect, useState } from 'react'
import type { Olympic, PageContent } from '../models/types'
import { olympicMockData } from '../mocks/olympicMockData'
import { pageContentMockData } from '../mocks/pageContentMockData'

function useData() {
  const [allCountries, setAllCountries] = useState<Olympic[]>([])
  const [pageContents, setPageContents] = useState<PageContent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      setAllCountries(olympicMockData)
      setPageContents(pageContentMockData)
    } catch {
      setError("Erreur lors du chargement des données")
    } finally {
      setLoading(false)
    }
  }, [])

  const getCountryById = (id: number) => {
    return allCountries.find((country) => country.id === id)
  }

  const getPageContentById = (id: string) => {
    return pageContents.find((content) => content.id === id)
  }

  return {
    allCountries,
    loading,
    error,
    getCountryById,
    getPageContentById,
  }
}

export default useData
