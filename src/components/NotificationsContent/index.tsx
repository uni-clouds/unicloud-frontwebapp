import { v4 as uuidv4 } from 'uuid'
import { CardNotifications } from './CardNotifications'
import { mockData } from './data'

export const NotificationsContent: React.FC = () => {
  return (
    <div className='py-4 h-64 custom-dark bg-white overflow-y-scroll dark:scrollbar-thin  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-stone-200 hover:scrollbar-thumb-stone-200 dark:scrollbar-thumb-zinc-800 dark:hover:scrollbar-thumb-stone-700 '>
      {mockData.map((data) => (
        <CardNotifications
          type={data.type}
          description={data.description}
          time={data.time}
          key={uuidv4()}
        />
      ))}
    </div>
  )
}
