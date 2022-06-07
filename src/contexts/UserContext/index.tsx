import { parseCookies } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import {
  UserProviderProps,
  ContextType,
  CustomerType,
  CustomerDataType,
  OrganizationLogoType
} from './types'

export const UserContext = createContext<ContextType>({} as ContextType)

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [customerData, setCustomerData] = useState<CustomerDataType>()
  const [customerType, setCustomerType] = useState<CustomerType>()
  const [organizationLogo, setOrganizationLogo] =
    useState<OrganizationLogoType>()

  const { token } = parseCookies()
  useEffect(() => {
    if (token !== undefined) {
      getCustomerData()
      getCustomerType()
      getOrganizationLogo()
    }
  }, [])

  async function getCustomerData() {
    try {
      const request = await api.get('/get-organization/')
      setCustomerData(request.data)
    } catch (err) {
      console.error('getCustomerData', err)
    }
  }

  async function getOrganizationLogo() {
    try {
      const request = await api.get('/organization-logo/')
      setOrganizationLogo(request.data)
    } catch (err) {
      console.error('getLogo', err)
    }
  }

  async function getCustomerType() {
    const request = await api.get('/customer-type/')
    const data = request.data
    setCustomerType(data)
    return request.data
  }

  return (
    <UserContext.Provider
      value={{ customerData, customerType, organizationLogo }}
    >
      {children}
    </UserContext.Provider>
  )
}
