import * as yup from 'yup'
import i18n from '../../../i18n'

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email('validation:email-invalid')
    .required('validation:email-required'),
  password: yup
    .string()
    .required('validation:password-required')
    .min(6, 'validation:password-invalid')
})
