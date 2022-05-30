import { useContext } from 'react'
import { DecodeTokenContext } from '../contexts/DecodeTokenContext'

export const useDecode = () => {
  const context = useContext(DecodeTokenContext)
  return context
}
