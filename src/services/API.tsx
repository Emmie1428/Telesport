import axios from 'axios'
import type { Olympic, PageContent } from '../models/types'
import { olympicMockData } from '../mocks/olympicMockData'
import { pageContentMockData } from '../mocks/pageContentMockData'

const apiURL = import.meta.env.VITE_BASE_URL
const USE_MOCK = true  //true pour passer sur les mockDatas//

//Pour Typescript
type ConfigKey = 'allCountries' | 'country'

//Configuration des types d'infos//
const CONFIG = {
    allCountries: {
        endpoint: () => '/',
        mockData: olympicMockData,
        idScript: null as null
    },
    country: {
        endpoint: (id: number) => `/country/${id}`,
        mockData: olympicMockData,
        idScript: 'id' as const
    }
}

//Fonction pour aller chercher les datas selon le type et la source des données//
export async function fetchData(type: ConfigKey, userId: number | null = null): Promise<Olympic | Olympic[] | null> {
    const { endpoint, mockData, idScript } = CONFIG[type]

    try {
        if (USE_MOCK) {
            if (idScript) {
                const data = mockData.find((item: Olympic) => item[idScript as keyof Olympic] === userId)
                return data || null
            } else {
                return mockData
            }
        } else {
            const response = await axios.get(`${apiURL}${endpoint(userId as number)}`)
            return response.data.data
        } 
    } catch (error) {
        const message = error instanceof Error ? error.message : "Erreur fetchData"
        console.error(`Erreur ${type}`, message)
        return null
    }
}

//Call des fonctions pour chaque type//
export const getAllCountriesData = () => fetchData("allCountries")
export const getCountryData = (userId: number) => fetchData("country", userId)

// Fonction pour récupérer les contenus de type texte des pages
export const getPageContent = (id: string): PageContent | undefined => {
    return pageContentMockData.find(content => content.id === id)}