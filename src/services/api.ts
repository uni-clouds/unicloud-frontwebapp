import axios, { AxiosRequestConfig } from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

//verificar se o usuário está logado e revalidar token
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (cookies.token) {
      config.headers = {
        Authorization: `Bearer ${cookies.token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
