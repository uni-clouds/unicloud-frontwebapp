import { v4 as uuidv4 } from 'uuid'
import { CardNotifications } from './CardNotifications'
import { mockData } from './data'

export const NotificationsContent: React.FC = () => {
  return (
    <div className='py-4 h-64 bg-stone-50 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-stone-200 hover:scrollbar-thumb-stone-200'>
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
