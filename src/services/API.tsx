import axios from 'axios'
import type { Olympic } from '../models/types'
import { olympicMockData } from '../mocks/olympicMockData'

const apiURL = import.meta.env.VITE_BASE_URL
const USE_MOCK = true  //true pour passer sur les mockDatas//


//Fonction pour aller chercher les datas selon le type et la source des données//
export async function getCountryData(userId: number): Promise<Olympic | null> {
    try {
        if (USE_MOCK) {
            const data = olympicMockData.find(item => item.id === userId)
            return data || null
        } else {
            const response = await axios.get(`${apiURL}/country/${userId}`)
            return response.data.data
        } 
    } catch (error) {
        const message = error instanceof Error ? error.message : "Erreur inconnue"
        console.error('Erreur country', message)
        return null
    }
}