import * as yup from 'yup'

export const schemaCreatePod = yup.object({
  name: yup
    .string()
    .min(5, 'validation:min-chars_5')
    .required('validation:name-required'),
  location: yup
    .string()
    .min(3, 'validation:city-invalid')
    .required('validation:-city-required'),
  pod_user: yup
    .string()
    .min(5, 'validation:min-chars_5')
    .required('validation:name-required'),
  pod_password: yup
    .string()
    .required('validation:password-required')
    .min(6, 'validation:min-chars_6'),
  type: yup.string().required('validation:select-type'),
  url_base: yup
    .string()
    .url('validation:url-invalid')
    .required('validation:url-required'),
  project_id: yup
    .string()
    .min(5, 'validation:id-invalid')
    .required('validation:id-required'),
  domain_tenant: yup
    .string()
    .max(50, 'validation:max-chars_50')
    .required('validation:domainTenant-required'),
  spare_nodes: yup
    .string()
    .min(1, 'validation:format_integer')
    .required('validation:required_amount')
})
