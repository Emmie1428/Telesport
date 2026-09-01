

export interface Participation {
    id: number,
    year: number,
    city: string,
    medalsCount: number,
    athleteCount: number
}

export interface Olympic {
    id: number,
    country: string,
    participations: Participation[]
}

export interface StatLabel {
    key: string,
    label: string
}

export interface StatItem {
  label: string
  value: number
}

export interface PageContent {
    id: string,
    pageTitle: string,
    pageDescription: string,
    stats: StatLabel[], 
    footnote: string,
}

export interface MedalsChartData {
    labels: string[]
    datasets: Array<{
        label: string
        data: number[]
        backgroundColor?: string[]
        borderColor?: string[]
        borderWidth?: number
    }>
}