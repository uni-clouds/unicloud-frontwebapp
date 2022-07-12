import * as yup from 'yup'
import i18n from '../../../i18n'

const translate = i18n.t

export const schemaUpdateUser = yup.object({
  username: yup
    .string()
    .email(`${translate('error-email-invalid')}`)
    .required(`${translate('error-email-required')}`),
  first_name: yup
    .string()
    .min(3, `${translate('error-firstName-invalid')}`)
    .required(`${translate('error-firstName-required')}`),
  last_name: yup
    .string()
    .min(3, `${translate('error-lastName-invalid')}`)
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
    .min(5, `${translate('error-city-required')}`)
    .required(`${translate('error-city-required')}`),
  state: yup
    .string()
    .min(5, `${translate('error-country-required')}`)
    .required(`${translate('error-state-required')}`),
  country: yup
    .string()
    .min(3, `${translate('error-country-required')}`)
    .required(`${translate('error-country-required')}`)
})
