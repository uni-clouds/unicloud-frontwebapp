import * as yup from 'yup'
import i18n from '../../../i18n'

const translate = i18n.t

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email(`${translate('error-email-invalid')}`)
    .required(`${translate('error-email-required')}`),
  password: yup
    .string()
    .required(`${translate('error-password-required')}`)
    .min(6, `${translate('error-password-invalid')}`)
})
