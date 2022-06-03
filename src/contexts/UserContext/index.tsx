import { parseCookies } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'
import {
  UserProviderProps,
  ContextType,
  CustomerType,
  ContextData,
  CustomerDataType
} from './types'

export const UserContext = createContext<ContextType>({} as ContextType)

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [customerData, setCustomerData] = useState<CustomerDataType>()
  const [customerType, setCustomerType] = useState<CustomerType>()
  const { token } = parseCookies()
  useEffect(() => {
    if (token !== undefined) {
      getData()
      getCustomerType()
    }
  }, [])

  async function getData() {
    try {
      Promise.all([
        await api.get('/get-organization/'),
        await api.get('/organization-logo/')
      ]).then((response) => response.map((res) => setCustomerData(res.data)))
    } catch (err) {
      console.error('getData', err)
    }
  }

  async function getCustomerType() {
    const request = await api.get('/customer-type/')
    const data = request.data
    setCustomerType(data)
    return request.data
  }
  console.log('context', customerData)

  return (
    <UserContext.Provider value={{ customerData, customerType }}>
      {children}
    </UserContext.Provider>
  )
}
