import { JwtPayload } from 'jwt-decode'

export interface DecodeTokenType extends JwtPayload {
  email?: string
  first_name?: string
  last_name?: string
  username?: string
  user_id?: number
  is_staff?: boolean
  is_superuser?: boolean
}

export interface CanAccessParams {
  role: string[]
}
