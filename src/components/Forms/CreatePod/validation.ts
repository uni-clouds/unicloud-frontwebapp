import * as yup from 'yup'

export const schemaCreatePod = yup.object({
  username: yup
    .string()
    .email('Informe e-mail válido')
    .required('Informe um e-mail')
})
