import { AxiosRequestConfig } from 'axios'
import { api } from '../../services/api'
import { UserType } from './types'

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post('/login', { email, password })

    //token vem da request.data
    return request.data
  } catch (err) {
    console.error(err)
    return null
  }
}

export function setUserLocalStorage(user: UserType | null) {
  localStorage.setItem('key', JSON.stringify(user))
}

export function getTokenLocalStorage() {
  const json = localStorage.getItem('key')

  if (!json) {
    return null
  }

  const user = JSON.parse(json)
  //verificar se o retorno está no formato válido ou retornar null

  return user ?? null
}
