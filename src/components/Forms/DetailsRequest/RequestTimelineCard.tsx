import { useTranslation } from 'react-i18next'
import {
  AiOutlinePlusCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle
} from 'react-icons/ai'
import { colors } from '../../../styles/colors'
import { formatDate } from '../../Tables/CustomerRequests/utils'
import { RequestTimelineCardProps } from './types'

export function RequestTimelineCard(props: RequestTimelineCardProps) {
  const { type, user, date } = props
  const { t: translate } = useTranslation()

  function returnTypeText() {
    if (type === 'request') return translate('customersUsers:madeRequest')
    if (type === 'approval') return translate('customersUsers:madeApproval')
    if (type === 'disapproval')
      return translate('customersUsers:madeDisapproval')
  }
  function returnTypeIcon() {
    if (type === 'request') return <AiOutlinePlusCircle />
    if (type === 'approval') return <AiOutlineCheckCircle />
    if (type === 'disapproval') return <AiOutlineCloseCircle />
  }

  const iconColor = () => {
    let color: string
    if (type === 'request') color = 'yellow-custom'
    if (type === 'approval') color = 'green-custom'
    if (type === 'disapproval') color = 'red-custom'
    return color
  }

  return (
    <div
      className={` flex w-full gap-4 items-center py-2 px-4  dark:bg-light-600 rounded-lg bg-light-50`}
    >
      <div className={`text-${iconColor()}`}>{returnTypeIcon()}</div>
      {formatDate(date)}
      <p>
        <span className='font-bold'>{user}</span>{' '}
        <span>{returnTypeText()}</span>
      </p>
    </div>
  )
}
