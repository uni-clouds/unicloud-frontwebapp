import { Grid } from '@mui/material'

export const CardPod: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <div className='w-full h-full p-8 bg-neutral-50 shadow rounded-md dark:border dark:border-light-200 custom-dark'>
          <h3>nome do Pod</h3>
          <ul>
            <li>location</li>
            <li>tipo</li>
            <li>url</li>
            <li>pod_user</li>
          </ul>
        </div>
      </Grid>
    </Grid>
  )
}
