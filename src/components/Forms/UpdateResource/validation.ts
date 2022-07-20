import * as yup from 'yup'

export const schemaUpdateResources = yup.object({
  new_resource_name: yup.string().required('validation:required')
})
