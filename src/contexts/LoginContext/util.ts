import { api } from '../../services/api'
import { UserType } from './types'
import { setCookie, parseCookies } from 'nookies'

const MAX_AGE = 7 * 24 * 60 * 60 //7 days

export async function LoginRequest(username: string, password: string) {
  try {
    const request = await api.post('/login/', { username, password })

    //token = request.data.access
    //refresh token = request.data.refresh

    return request.data
  } catch (err) {
    console.error(err)
    return null
  }
}

export function setUserLocalStorage(user: UserType | null) {
  setCookie(null, 'user', JSON.stringify(user), {
    path: '/',
    maxAge: MAX_AGE,
    sameSite: true
  })
}

export function getTokenLocalStorage() {
  const token = parseCookies()
  if (!token.hasOwnProperty('user')) {
    return null
  }
  return token ?? null
}
