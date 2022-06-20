import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, MenuItem, Select } from '@mui/material'

export const FilterChart: React.FC = () => {
  const [period, setPeriod] = useState('')

  return (
    <FormControl sx={{ width: 150 }}>
      <Select
        id='filter-sales-chart'
        value={period}
        onChange={(event) => setPeriod(event.target.value)}
        label='Período'
        displayEmpty
        variant='filled'
        sx={{
          padding: 0,
          background: '#fff'
        }}
      >
        <MenuItem value=''>Selecione</MenuItem>
        <MenuItem value={10}>
          <Link to='#'>Weekly</Link>
        </MenuItem>
        <MenuItem value={20}>
          <Link to='#'>Monthly</Link>{' '}
        </MenuItem>
        <MenuItem value={30}>
          <Link to='#'>Yearly</Link>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
