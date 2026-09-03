import type { ReactNode } from 'react'

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

export interface ChartHeaderProps {
    pageTitle: string
    pageDescription: string
    stats: StatItem[]
    footnote: string
    chart?: ReactNode
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

export interface CountryChartDataset {
    label: string
    data: number[]
    backgroundColor?: string
    borderColor?: string
    borderWidth?: number
    tension?: number
    fill?: boolean
}

export interface CountryChartData {
    labels: string[]
    datasets: CountryChartDataset[]
}

export interface HeaderProps {
  id: number
}