import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

let cookies = parseCookies()
let isRefreshing = false
let failedRequestQueue: any = []

let URL_BACKEND = 'https://unicloudbr.azurewebsites.net'

export const api = axios.create({
  baseURL: import.meta.env.VITE.BASE_URL
})

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

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response.data === 'Token is invalid or expired') {
        const { refreshToken } = cookies
        const originalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true

          api
            .post('/api/token/refresh/', {
              refresh: refreshToken
            })
            .then((response) => {
              const token = response.data

              setCookie(null, 'token', token, {
                path: '/',
                maxAge: 60 * 60 //60 minutes = 3600 seconds
              })

              api.defaults.headers.common['Authorization'] = `Bearer ${token}`
              failedRequestQueue.forEach((request: any) =>
                request.onSuccess(token)
              )
              failedRequestQueue = []
            })
            .catch((err) => {
              failedRequestQueue.forEach((request: any) =>
                request.onFailure(err)
              )
              failedRequestQueue = []
            })
            .finally(() => {
              isRefreshing = false
            })
        }
        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers = {
                Authorization: `Bearer ${token}`
              }
              resolve(api(originalConfig))
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            }
          })
        })
      } else {
        destroyCookie(null, 'user')
        destroyCookie(null, 'refresh')
        destroyCookie(null, 'token')
      }
    }
    return Promise.reject(error)
  }
)
