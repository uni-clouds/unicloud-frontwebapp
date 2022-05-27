import { createContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { api } from '../../services/api'
import {
  UserProviderProps,
  ContextType,
  CustomerType,
  CustomerDataType,
  ContextData
} from './types'

export const UserContext = createContext<ContextType>({} as ContextType)

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [customerData, setCustomerData] = useState<ContextData>()
  const [customerType, setCustomerType] = useState<CustomerType>()

  useEffect(() => {
    const cookies = parseCookies()

    if (cookies.token) {
      getData()
      getCustomerType()
    }
  }, [])

  async function getData() {
    Promise.all([
      await api.get('/get-organization/')
      //await api.get('/organization-logo/')
    ]).then((response) => response.map((res) => setCustomerData(res.data)))
  }

  async function getCustomerType() {
    const request = await api.get('/customer-type/')
    const data = request.data
    setCustomerType(data)
    return request.data
  }
  return (
    <UserContext.Provider value={{ ...customerData, customerType }}>
      {children}
    </UserContext.Provider>
  )
}
