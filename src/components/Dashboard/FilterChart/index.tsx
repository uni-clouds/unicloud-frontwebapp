import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const FilterChart: React.FC = () => {
  const [period, setPeriod] = useState('')

  return (
    <FormControl sx={{ width: 125 }}>
      <InputLabel
        id='filter-sales-chart'
        aria-describedby='filter sales chart'
        role='select'
      >
        Período
      </InputLabel>
      <Select
        id='filter-sales-chart'
        value={period}
        onChange={(event) => setPeriod(event.target.value)}
        label='Período'
        displayEmpty={true}
        variant='outlined'
        className={`focus:outline-none focus:ring-0 ring-black`}
      >
        <MenuItem value={10}>Weekly</MenuItem>
        <MenuItem value={20}>Monthly</MenuItem>
        <MenuItem value={30}>Yearly</MenuItem>
      </Select>
    </FormControl>
  )
}
