import * as yup from 'yup'

export const schemaCreateCustomer = yup.object({
  email: yup
    .string()
    .email('Informe e-mail válido')
    .required('Informe um e-mail')
})
