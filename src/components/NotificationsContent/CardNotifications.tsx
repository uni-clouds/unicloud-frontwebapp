import { BsArrowDownUp } from 'react-icons/bs'
import { IoNewspaperOutline } from 'react-icons/io5'
import { RiFileWarningLine } from 'react-icons/ri'
import { CardNotificationsProps } from './types'

export const CardNotifications: React.FC<CardNotificationsProps> = ({
  type,
  description,
  time
}) => {
  return (
    <div className='flex flex-row gap-2 py-4 pr-6 pl-4 items-center hover:bg-stone-200 dark:hover:bg-zinc-700 w-full'>
      <div
        className={`grid place-content-center w-8 h-8 rounded-full dark:text-zinc-700 text-neutral-400 text-xl p-2 ${
          type === 'warning'
            ? 'bg-rose-200'
            : type === 'update'
            ? 'bg-sky-200'
            : 'bg-emerald-100'
        }`}
      >
        {type === 'warning' ? (
          <RiFileWarningLine />
        ) : type === 'update' ? (
          <IoNewspaperOutline />
        ) : (
          <BsArrowDownUp />
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-xs text-base-400 dark:text-zinc-100'>{description}</span>
        <span className='text-[0.5rem] text-base-300 dark:text-light-200'>{time}</span>
      </div>
    </div>
  )
}
