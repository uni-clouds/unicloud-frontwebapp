import * as yup from 'yup'

export const schemaContract = yup.object({
  email: yup
    .string()
    .email('validation:email-invalid')
    .required('validation:email-required')
})
