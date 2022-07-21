import * as yup from 'yup'

export const schemaResources = yup.object({
  resource: yup.string().required('validation:required')
})
