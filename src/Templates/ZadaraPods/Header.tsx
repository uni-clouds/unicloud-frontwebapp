import { Tooltip } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiPlus } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { Title } from '../../components/Elements/TitleDashboard'
import { ModalCreatePod } from './ModalCreatePod'
import { HeaderPodsProps } from './types'

export const Header: React.FC<HeaderPodsProps> = ({ pods }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { t: translate } = useTranslation()

  return (
    <div className='w-full py-6 px-4 flex row justify-between items-center'>
      <div className='flex flex-col gap-3'>
        <Title text={translate('pods')} />
        <p className='text-base-400'>
          {pods > 1
            ? `${translate('pageSubtitle-1')} ${pods} ${translate(
                'pods:pods-subtitle-p2-plural'
              )}`
            : pods === 1
            ? `${translate('pageSubtitle-1')} ${pods} ${translate(
                'pods:pods-subtitle-p2-singular'
              )}`
            : null}
        </p>
      </div>
      <Tooltip title={translate('pods:addPod')}>
        <PurpleButton name='create-pod' onclick={() => setIsOpen(true)}>
          <HiPlus fontSize={20} />
          {translate('pods:pods-subtitle-p2-singular')}
        </PurpleButton>
      </Tooltip>
      <ModalCreatePod isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  )
}
