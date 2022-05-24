import { useEffect, useState } from 'react'
import { BsChatText, BsChat } from 'react-icons/bs'
import { ChatIconPros } from './types'

export const ChatIcon: React.FC<ChatIconPros> = ({ message }) => {
  const [isMessage, setIsMessage] = useState(false)

  useEffect(() => {
    setIsMessage(message)
  }, [message])

  if (isMessage) {
    return <BsChatText />
  }
  return <BsChat />
}
