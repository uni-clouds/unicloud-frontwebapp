import * as yup from 'yup'

export const schemaCreatePod = yup.object({
  name: yup
    .string()
    .min(5, 'Mínimo de 5 caracteres')
    .required('Informe um nome'),
  location: yup
    .string()
    .min(3, 'Informe uma cidade válida')
    .required('Informe uma cidade'),
  pod_user: yup
    .string()
    .min(5, 'Mínimo de 5 caracteres')
    .required('Informe um nome'),
  pod_password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'Senha deve conter no mínimo 6 carácteres'),
  type: yup.string().required('Selecione um tipo!'),
  url_base: yup
    .string()
    .url('Informe uma URL válida')
    .required('Informe uma URL'),
  project_id: yup
    .string()
    .min(5, 'Informe um ID válido')
    .required('Informe um ID'),
  domain_tenant: yup.string().max(50).required('Informe o domain tenant'),
  spare_nodes: yup
    .string()
    .min(1, 'Informe um número inteiro')
    .required('Informe a quantidade!')
})
