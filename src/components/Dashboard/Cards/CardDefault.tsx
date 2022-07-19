import { CardDefaultProps } from '../../../templates/Dashboard/types'

export const CardDefault: React.FC<CardDefaultProps> = ({
  title,
  description,
  amount,
  icon: Icon
}) => {
  return (
    <div className='flex-wrap w-full h-full bg-white custom-dark p-4 lg:p-6 text-base-600 dark:text-neutral-200 rounded-md shadow'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-2 items-center flex-wrap '>
          <h3 className='font-medium text-md lg:text-xl text-base-700 dark:text-slate-100'>
            {title}
          </h3>
          <div className='text-lg lg:text-2xl dark:text-slate-100 '>
            <Icon />
          </div>
        </div>
        <div>
          {amount && description ? (
            <p className='text-sm md:text-md lg:text-lg leading-4 '>
              {description}:
              <span className='text-normal lg:text-lg xl:text-xl font-bold text-brand-bitcoin align-middle'>
                {amount}
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
