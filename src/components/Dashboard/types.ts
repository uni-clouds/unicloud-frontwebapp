export interface CardLineProps {
  title: string
  total: string | number
  index: number
  type: string | number
}

export interface CardDefaultProps {
  title: string
  description: string
  amount: number
}

export interface DashboardDataType {
  customers: string[]
  locations: Array<[number, number]>
  partners: string[]
}

export interface PartnersProps {
  partners?: string[],
  isLoading: boolean
}
export interface PodsLocationsProps {
  locations?: Array<[number, number]>
  isLoading: boolean
}
