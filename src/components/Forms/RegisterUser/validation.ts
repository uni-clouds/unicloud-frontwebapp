import * as yup from 'yup'

export const schemaRegister = yup.object({
  username: yup
    .string()
    .email('validation:email-invalid')
    .required('validation:email-required'),
  first_name: yup
    .string()
    .min(3, 'validation:firstName-required')
    .required('validation:firstName-required'),
  last_name: yup
    .string()
    .min(3, 'validation:lastName-required')
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
    .min(5, 'validation:state-invalid')
    .required('validation:state-required'),
  country: yup
    .string()
    .min(3, 'validation:country-invalid')
    .required('validation:country-required'),
  password: yup
    .string()
    .required('validation:password-invalid')
    .min(6, 'validation:min-chars_6')
})
