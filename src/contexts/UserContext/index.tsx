import { createContext, useMemo, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'
import {
  UserProviderProps,
  ContextType,
  CustomerType,
  ContextData
} from './types'

export const UserContext = createContext<ContextType>({} as ContextType)

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [customerData, setCustomerData] = useState<ContextData>()
  const [customerType, setCustomerType] = useState<CustomerType>()
  const { token } = useAuth()
  useMemo(() => {
    if (token) {
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
    <UserContext.Provider
      value={{ ...customerData, customerType, getData, getCustomerType }}
    >
      {children}
    </UserContext.Provider>
  )
}
