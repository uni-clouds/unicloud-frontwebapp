import axios, { AxiosRequestConfig } from 'axios'
import { getTokenLocalStorage } from '../contexts/LoginContext/util'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

//verificar se o usuário está logado e revalidar token
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getTokenLocalStorage()

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
