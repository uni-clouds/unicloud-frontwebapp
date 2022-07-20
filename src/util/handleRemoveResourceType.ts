import { api } from '../services/api'

//{"status":"deleted"}
export let responseRemoveResourceType
export const handleRemoveResourceType = async (id: number): Promise<void> => {
  try {
    const { data, status } = await api.delete('/resources-type/', {
      data: {
        resource_type_id: id
      }
    })
    if (status === 200 && data.status === 'deleted') {
      responseRemoveResourceType = 'Recurso deletado com sucesso!'
      return data
    }
    return
  } catch (error) {
    console.error('Delete failed', error)
  }
}
