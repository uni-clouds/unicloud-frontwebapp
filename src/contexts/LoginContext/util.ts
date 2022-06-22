import { api } from '../../services/api'
import { UserType } from './types'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

const MAX_AGE_TOKEN = 60 * 60 * 24 //24h
const MAX_AGE_REFRESH_TOKEN = 60 * 60 * 24 * 7 //7 days
const SESSION_VALIDATE = 60 * 1000 * 45 //45 min

export async function LoginRequest(username: string, password: string) {
  try {
    const request = await api.post('/login/', { username, password })

    const data = request.data
    if (data.refresh !== undefined && data.refresh !== null) {
      setCookie(null, 'refresh', data.refresh, {
        path: '/',
        maxAge: MAX_AGE_REFRESH_TOKEN,
        sameSite: true
      })
    }
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function checkToken(token: string) {
  try {
    const request = await api.post('/api/token/verify/', {
      token: token
    })
    console.log('token verificado 🏁', request.data)
    if (request.status === 200 && request.data !== undefined) {
      setCookie(null, 'token', String(request.data.access), {
        path: '/',
        maxAge: MAX_AGE_TOKEN,
        sameSite: true
      })
    }
    return request.data
  } catch (err) {
    console.error(err)
    return null
  }
}

export function setUserLocalStorage(user: UserType | null) {
  if (user?.token !== undefined && user?.token !== null) {
    setCookie(null, 'user', String(user.email), {
      path: '/',
      maxAge: MAX_AGE_REFRESH_TOKEN,
      sameSite: true
    })
    setCookie(null, 'token', String(user.token), {
      path: '/',
      maxAge: MAX_AGE_TOKEN,
      sameSite: true
    })
  }
}

export function removeUserLocalStorage() {
  destroyCookie(null, 'user')
  destroyCookie(null, 'refresh')
  destroyCookie(null, 'token')
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
      const request = await api.post('/api/token/refresh/', {
        refresh: refreshToken
      })

      const data = request.data
      console.log('refresh token', data)
      if (request.status === 200 && request.data !== undefined) {
        setCookie(null, 'token', String(data.access), {
          path: '/',
          maxAge: MAX_AGE_TOKEN,
          sameSite: true
        })
      }
      const cookies = parseCookies()
      console.log('novo token', cookies.token)
      return data
    } catch (err) {
      console.error(err)
      return null
    }
  }, SESSION_VALIDATE)
}
