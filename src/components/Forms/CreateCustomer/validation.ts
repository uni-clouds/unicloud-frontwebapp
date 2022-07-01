import * as yup from 'yup'

export const schemaCreateCustomer = yup.object({
  email: yup
    .string()
    .email('Informe e-mail válido')
    .required('E-mail necessário'),
  cnpj: yup
    .string()
    .min(14, 'Informe CNPJ contendo 14 digítos')
    .required('Campo obrigatório!'),
  type: yup.string().required('Selecione um tipo!')
})
