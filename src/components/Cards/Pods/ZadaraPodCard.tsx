import { Grid } from '@mui/material'
import { usePodsData } from '../../../hooks/usePodsData'
import { v4 as uuidv4 } from 'uuid'

export const ZadaraPodCard: React.FC = () => {
  const { data } = usePodsData()
  const styles = {
    cursor: 'pointer',
    '& :hover': {
      cursor: 'pointer'
    }
  }
  return (
    <Grid container spacing={4} sx={styles}>
      {data?.map((pod) => (
        <Grid
          item
          md={3}
          lg={4}
          key={uuidv4()}
          onMouseOver={() => console.log('open modal details 🎯')}
        >
          <div className='w-full h-full p-8 bg-neutral-50 shadow-md dark:shadow rounded-md dark:shadow-black custom-dark hover:shadow-brand-200 dark:hover:shadow-brand-800'>
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
              <li>
                <span className='font-semibold dark:text-brand-bitcoin mr-1'>
                  URL:
                </span>{' '}
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
