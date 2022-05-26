import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NotificationIcon } from '../../../Elements/NotificationIcon'

//! incluir map com notification content
export const Notifications = () => {
  const [haveNotifications, setHasNotifications] = useState(true)

  return (
    <div className='dropdown'>
      <label
        tabIndex={0}
        className='btn w-10 btn-ghost hover:bg-transparent hover:text-brand-600 hover:rounded-full transition-colors delay-75 ease-in-out text-3xl '
      >
        <Link to='#'>
          <NotificationIcon isNotification={haveNotifications} />
        </Link>
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu p-2 shadow bg-slate-50 w-60 mt-2 '
      >
        <li>
          <Link to='#'>
            <span>notificação 1</span>
          </Link>
        </li>
        <li>
          <Link to='#'>
            <span>notificação 2</span>
          </Link>
        </li>
        <li>
          <Link to='#'>
            <span>notificação 3</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
