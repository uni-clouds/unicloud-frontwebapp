import { api } from '../services/api'

export let responseRemoveResource
export let responseUpdateResource
export const handleRemoveResource = async (id: number): Promise<void> => {
  try {
    const { data, status } = await api.delete('/resources/', {
      data: {
        resource_id: id
      }
    })
    if (status === 200 && data.status === 'deleted') {
      responseRemoveResource = 'Recurso deletado com sucesso!'
      return data
    }
    return
  } catch (error) {
    console.error('Delete failed', error)
  }
}

export const handleUpdateResource = async (
  id: number,
  resource: string
): Promise<void> => {
  try {
    const { data, status } = await api.patch('/resources/', {
      resource_id: id,
      new_resource_name: resource
    })
    if (status === 200) {
      responseUpdateResource = 'Recurso atualizado com sucesso!'
      return data
    }
    return
  } catch (error) {
    console.error('Updated failed', error)
  }
}
