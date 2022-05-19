import * as yup from 'yup'

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email('Informe e-mail válido')
    .required('Informe seu e-mail'),
  password: yup
    .string()
    .required('Informe a senha')
    .length(6, 'Senha deve conter no mínimo 6 dígitos')
})
