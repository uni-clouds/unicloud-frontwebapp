import * as yup from 'yup'

export const schemaCreateCustomer = yup.object({
  email: yup
    .string()
    .email('validation:email-invalid')
    .required('validation:email-required'),
  cnpj: yup
    .string()
    .min(14, 'validation:cnpj-invalid')
    .required('validation:required'),
  type: yup.string().required('validation:select-type')
})
