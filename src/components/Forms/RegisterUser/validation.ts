import * as yup from 'yup'
import i18n from '../../../i18n'

const translate = i18n.t

export const schemaRegister = yup.object({
  username: yup
    .string()
    .email(`${translate('error-email-invalid')}`)
    .required(`${translate('error-email-required')}`),
  first_name: yup
    .string()
    .min(3, `${translate('error-firstName-required')}`)
    .required(`${translate('error-firstName-required')}`),
  last_name: yup
    .string()
    .min(3, `${translate('error-lastName-required')}`)
    .required(`${translate('error-lastName-required')}`),
  phone: yup
    .string()
    .min(9, `${translate('error-phone-invalid')}`)
    .required(`${translate('error-phone-required')}`),
  address: yup
    .string()
    .min(5, `${translate('error-address-invalid')}`)
    .required(`${translate('error-address-required')}`),
  city: yup
    .string()
    .min(5, `${translate('error-city-invalid')}`)
    .required(`${translate('error-city-required')}`),
  state: yup
    .string()
    .min(5, `${translate('error-state-invalid')}`)
    .required(`${translate('error-state-required')}`),
  country: yup
    .string()
    .min(3, `${translate('error-country-invalid')}`)
    .required(`${translate('error-country-required')}`),
  password: yup
    .string()
    .required(`${translate('error-password-invalid')}`)
    .min(6, `${translate('error-password-required')}`)
})
