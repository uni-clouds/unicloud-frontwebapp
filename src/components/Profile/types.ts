export interface InformationDisplayProps {
  text: string
  icon?: boolean
  label?: string
}

export interface NavigationItemProps {
  text: string
  href: string
  active?: boolean
}

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
