import { useTranslation } from 'react-i18next'
import { RequestTimelineCard } from './RequestTimelineCard'
import { RequestTimelineProps } from './types'

export function RequestTimeline(props: RequestTimelineProps) {
  const { timeline } = props
  const { t: translate } = useTranslation()

  return (
    <div className='w-full flex flex-col gap-2 p-4 border rounded-lg'>
      <p className='text-lg font-bold '>
        {translate('customersUsers:request-timeline')}
      </p>
      <div className='flex flex-col gap-2'>
        {timeline?.map((el, index) => (
          <RequestTimelineCard
            key={`timeline-card-${index}`}
            type={el.type}
            date={el.date}
            user={el.user}
          />
        ))}
      </div>
    </div>
  )
}
