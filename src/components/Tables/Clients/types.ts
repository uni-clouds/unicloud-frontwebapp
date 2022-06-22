export interface Column {
  id: 'name' | 'locality' | 'joinAt'
  label: string
  minWidth?: number
  align?: 'right'
}

export interface Data {
  name: string
  locality: string
  joinAt: number
}

export interface TableDataProps {
  data?: string[]
  isLoading: boolean
  isError: string
}
