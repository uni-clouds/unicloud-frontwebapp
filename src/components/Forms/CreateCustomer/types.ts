export interface CreateCustomerType {
  email: string
  cnpj: string
  type?: string
}

export interface CreateCustomerFormProps {
  handleClose: () => void
}
