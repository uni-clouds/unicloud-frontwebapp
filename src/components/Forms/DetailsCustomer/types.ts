import { CustomerTableType } from '../../Tables/Customers/types'

export interface CustomerDetailsType {
  bairro: string
  cep: string
  cnpj: string
  telefone: string
  numero: string
  nome_fantasia: string
  razao_social: string
  logradouro: string
  municipio: string
  natureza_juridica: string
  estado: string
  pais: string
  email: string
}

export interface CustomerDetailsProps {
  handleClose: () => void
  data: CustomerTableType[]
}
