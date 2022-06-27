import { UserDataType } from '../../Tables/Users/types'

export interface DetailsUserProps {
  handleOnClose: () => void
  data: UserDataType[]
}

export interface UpdateUserType {
  username?: string
  first_name?: string
  last_name?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  country?: string
}
