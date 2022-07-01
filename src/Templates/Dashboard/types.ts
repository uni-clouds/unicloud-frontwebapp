import { MapProps } from '../../components/Dashboard/Charts/Maps/types'

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
  locations: Array<[number, number][]>
  partners: string[]
  number_of_pods: number
  total_fisical_cpu: number
  total_nodes: number
  total_spare_nodes: number
  total_vcores: number
  total_memory: number
}

export interface PartnersProps {
  partners?: string[]
  isLoading: boolean
  isError: string
}
export interface PodsLocationsProps extends MapProps {
  isError?: string
  isLoading?: boolean
}
