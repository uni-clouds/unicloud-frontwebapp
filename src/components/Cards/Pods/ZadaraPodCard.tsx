import { Grid } from '@mui/material'
import { usePodsData } from '../../../hooks/usePodsData'
import { v4 as uuidv4 } from 'uuid'

export const ZadaraPodCard: React.FC = () => {
  const { data } = usePodsData()

  return (
    <Grid container spacing={3}>
      {data?.length === 0 && (
        <div className='mx-auto p-6 mt-10'>
          <h3 className='text-xl font-semibold text-base-400'>
            Você não possui POD cadastrado!
          </h3>
        </div>
      )}
      {data?.map((pod) => (
        <Grid item md={4} lg={4} key={uuidv4()}>
          <div className='w-full flex-1 p-8 bg-neutral-50 shadow-md border border-light-200 dark:border-neutral-700 dark:shadow rounded-md dark:shadow-black custom-dark hover:shadow-brand-200 dark:hover:shadow-0'>
            <h3 className='font-semibold text-base-600 dark:text-light-200 text-lg uppercase leading-6 mb-4'>
              {pod.name}
            </h3>
            <ul className='flex flex-col gap-2 items-start'>
              <li>
                <span className='font-semibold dark:text-brand-bitcoin mr-1'>
                  Local:
                </span>
                <span className='capitalize'> {pod.location}</span>
              </li>
              <li>
                <span className='font-semibold dark:text-brand-bitcoin mr-1'>
                  Tipo:
                </span>
                <span className='capitalize'>{pod.type}</span>
              </li>
              <li className='w-full whitespace-nowrap'>
                <span className='font-semibold dark:text-brand-bitcoin mr-1'>
                  URL:
                </span>
                {pod.url_base}
              </li>
              <li>
                <span className='font-semibold dark:text-brand-bitcoin mr-1'>
                  User:
                </span>{' '}
                {pod.pod_user}
              </li>
            </ul>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}
