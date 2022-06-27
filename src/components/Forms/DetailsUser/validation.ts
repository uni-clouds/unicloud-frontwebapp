import * as yup from 'yup'

export const schemaUpdateUser = yup.object({
  username: yup
    .string()
    .email('Informe e-mail válido')
    .required('Informe um e-mail'),
  first_name: yup
    .string()
    .min(3, 'Informe seu nome')
    .required('Informe seu nome'),
  last_name: yup
    .string()
    .min(3, 'Informe seu sobrenome')
    .required('Informe seu sobrenome'),
  phone: yup
    .string()
    .min(9, 'Informe um telefone válido')
    .required('Informe seu telefone'),
  address: yup
    .string()
    .min(5, 'Informe um endereço válido')
    .required('Informe seu endereço'),
  city: yup.string().min(5, 'Informe a cidade').required('Informe uma cidade'),
  state: yup.string().min(5, 'Informe o estado').required('Informe o estado'),
  country: yup.string().min(3, 'Informe o país').required('Informe o país')
})
