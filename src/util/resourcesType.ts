import { api } from '../services/api'

export let responseRemoveResourceType
export let responseUpdateResourceType
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

export const handleUpdateResourceType = async (
  id: number,
  resource: string
): Promise<void> => {
  try {
    const { data, status } = await api.patch('/resources-type/', {
      resource_type_id: id,
      new_resource_type: resource
    })
    if (status === 200) {
      responseUpdateResourceType = 'Recurso atualizado com sucesso!'
      return data
    }
    return
  } catch (error) {
    console.error('Updated failed', error)
  }
}
