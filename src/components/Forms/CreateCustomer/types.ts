export interface CreateCustomerType {
  email: string
  cnpj: string
  type?: partner | customer
}

export interface CreateCustomerFormProps {
  handleClose: () => void
}
type customer = string
type partner = string
