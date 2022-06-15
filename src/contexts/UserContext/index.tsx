import { parseCookies } from 'nookies'
import { createContext, useEffect, useMemo, useState } from 'react'
import { api } from '../../services/api'
import {
  UserProviderProps,
  ContextType,
  CustomerType,
  CustomerDataType
} from './types'

export const UserContext = createContext<ContextType>({} as ContextType)

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [customerData, setCustomerData] = useState<CustomerDataType>()
  const [customerType, setCustomerType] = useState<CustomerType>()

  const { token } = parseCookies()
  useMemo(() => {
    if (token !== undefined) {
      getCustomerData()
      getCustomerType()
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

  async function getCustomerType() {
    const request = await api.get('/customer-type/')
    const data = request.data
    setCustomerType(data)
    return request.data
  }

  return (
    <UserContext.Provider value={{ customerData, customerType }}>
      {children}
    </UserContext.Provider>
  )
}
