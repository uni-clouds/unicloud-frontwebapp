import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UnstyledButton } from '../../../Elements/Buttons/Unstyled'
import { Divider } from '../../../Elements/Divider'
import { NotificationIcon } from '../../../Elements/NotificationIcon'

//! incluir map com notification content
export const Notifications = () => {
  const [haveNotifications, setHasNotifications] = useState(true)
  const navigate = useNavigate()

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
        <li className='hover:text-brand-600'>
          <Link to='#'>
            <span>notificação 1</span>
          </Link>
        </li>
        <li className='hover:text-brand-600'>
          <Link to='#'>
            <span>notificação 2</span>
          </Link>
        </li>
        <li className='hover:text-brand-600'>
          <Link to='#'>
            <span>notificação 3</span>
          </Link>
        </li>
        <Divider />
        <span className='hover:text-brand-600 mx-auto'>
          <UnstyledButton onclick={() => navigate('/notifications')}>
            Veja todas
          </UnstyledButton>
        </span>
      </ul>
    </div>
  )
}
