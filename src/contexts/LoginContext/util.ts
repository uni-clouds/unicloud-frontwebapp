import { api } from '../../services/api'
import { UserType } from './types'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

const MAX_AGE_TOKEN = 60 * 1000 * 60 //60 minutes
const MAX_AGE_REFRESH_TOKEN = 7 * 24 * 60 * 60 * 1000 //7 days
const SESSION_VALIDATE = 60 * 1000 * 59 //59 minutes

export async function LoginRequest(username: string, password: string) {
  try {
    const request = await api.post('/login/', { username, password })

    const data = request.data
    setCookie(null, 'refresh', data.refresh, {
      path: '/',
      maxAge: MAX_AGE_REFRESH_TOKEN,
      sameSite: true
    })
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

export function setUserLocalStorage(user: UserType | null) {
  setCookie(null, 'user', JSON.stringify(user), {
    path: '/',
    maxAge: MAX_AGE_TOKEN,
    sameSite: true
  })
}

export function removeUserLocalStorage() {
  destroyCookie(null, 'user')
  destroyCookie(null, 'refresh')
}

export function getTokenLocalStorage() {
  const token = parseCookies()
  if (!token.hasOwnProperty('user')) {
    return null
  }
  return token ?? null
}

export function refreshToken(refreshToken: string) {
  setInterval(async () => {
    try {
      const request = await api.post('/token-refresh/', { refreshToken })

      const data = request.data
      console.log('refresh route', data)

      setCookie(null, 'user', data, {
        path: '/',
        maxAge: MAX_AGE_TOKEN,
        sameSite: true
      })
      return data
    } catch (err) {
      console.error(err)
      return null
    }
  }, SESSION_VALIDATE)
}
