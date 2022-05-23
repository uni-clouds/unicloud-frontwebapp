import { api } from '../../services/api'
import { UserType } from './types'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

const MAX_AGE_TOKEN = 7 * 24 * 60 * 60 //7 days
const MAX_AGE_REFRESH_TOKEN = 30 * 24 * 60 * 60 //30 days

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
}

export function getTokenLocalStorage() {
  const token = parseCookies()
  if (!token.hasOwnProperty('user')) {
    return null
  }
  return token ?? null
}
