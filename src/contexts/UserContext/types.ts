export interface CustomerDataType {
  logo: string
  bairro: string
  cep: string
  cnpj: string
  email: string
  estado: string
  id: number
  is_active: boolean
  logradouro: string
  municipio: string
  natureza_juridica: string
  nome_fantasia: string
  numero: string
  razao_social: string
  telefone: string
  type: string
}

export interface CustomerType {
  type?: string
}

export interface ContextData {
  customerData?: CustomerDataType
  customerType?: CustomerType
}
export interface ContextType extends ContextData {}

export interface UserProviderProps {
  children: JSX.Element
}
