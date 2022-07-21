import { RequestTableType } from '../../Tables/CustomerRequests/types'

export interface RequestDetailsType {
  cnpj: string
  razao_social: string
  email: string
  request_by: string
  resources: string
  created_at: string
  expires_at: string
  status: string
  id: number
}

export interface RequestDetailsProps {
  handleClose: () => void
  data: RequestTableType[]
}

export interface RequestTimelineCardProps {
  type: 'request' | 'approval' | 'disapproval'
  user: string
  date: string
}

export interface RequestTimelineProps {
  timeline: [RequestTimelineCardProps]
}
