import * as yup from 'yup'

export const schemaUpdateUser = yup.object({
  username: yup
    .string()
    .email('validation:email-invalid')
    .required('validation:email-required'),
  first_name: yup
    .string()
    .min(3, 'validation:firstName-invalid')
    .required('validation:firstName-required'),
  last_name: yup
    .string()
    .min(3, 'validation:lastName-invalid')
    .required('validation:lastName-required'),
  phone: yup
    .string()
    .min(9, 'validation:phone-invalid')
    .required('validation:phone-required'),
  address: yup
    .string()
    .min(5, 'validation:address-invalid')
    .required('validation:address-required'),
  city: yup
    .string()
    .min(5, 'validation:city-invalid')
    .required('validation:city-required'),
  state: yup
    .string()
    .min(5, 'validation:country-invalid')
    .required('validation:state-required'),
  country: yup
    .string()
    .min(3, 'validation:country-invalid')
    .required('validation:country-required')
})
