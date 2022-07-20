import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { PartnersProps } from '../../../templates/Dashboard/types'
import { ListSkeleton } from '../../Elements/ListSkeleton'
import { Title } from '../../Elements/TitleDashboard'

export const CardListPartners: React.FC<PartnersProps> = ({
  partners,
  isLoading,
  isError
}) => {
  const { t: translate } = useTranslation()
  return (
    <div className='h-[34rem]  flex flex-col items-start bg-white custom-dark py-4 px-6 rounded-md shadow w-full'>
      {isLoading || isError !== 'success' ? (
        <div className='flex flex-col justify-between gap-4 items-center w-full'>
          <ListSkeleton />
        </div>
      ) : (
        <>
          <Title text={translate('partners')} />
          <ul className='whitespace-normal w-full mt-6 flex flex-col items-start gap-3 overflow-y-scroll scrollbar-thin  dark:scrollbar-thin scrollbar-track-transparent scrollbar-thumb-stone-100 hover:scrollbar-thumb-stone-100 dark:scrollbar-thumb-transparent dark:hover:scrollbar-thumb-stone-700 last:dark:border-b last:dark:border-b-zinc-700'>
            {partners?.map((data) => (
              <li
                className='w-full flex items-start  rounded-sm shadow-md py-2 border-l-2 border-l-brand-480  dark:shadow-zinc-800'
                key={uuidv4()}
              >
                <div className='lg:w-[16.5rem] md:w-[10rem] max-w-xs py-2'>
                  <p className='text-[0.65rem] lg:text-xs font-normal pl-2 text-left'>
                    {data}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
