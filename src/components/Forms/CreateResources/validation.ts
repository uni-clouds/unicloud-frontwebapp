import * as yup from 'yup'

export const schemaResources = yup.object({
  resource_name: yup.string().required('validation:required')
})
