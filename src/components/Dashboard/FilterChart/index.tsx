import { useState } from 'react'
import { Link } from 'react-router-dom'

export const FilterChart: React.FC = () => {
  const [period, setPeriod] = useState('')

  return (
    <form>
      <label
        id='filter-sales-chart'
        aria-describedby='filter sales chart'
        role='select'
      ></label>
      <select
        id='filter-sales-chart'
        value={period}
        onChange={(event) => setPeriod(event.target.value)}
        className='select select-ghost focus:border-transparent focus:outline-transparent focus:ring-0 text-base-500'
      >
        <option value={10} selected className='text-base-500'>
          Weekly
        </option>
        <option value={20} className='text-base-500'>
          Monthly
        </option>
        <option value={30} className='text-base-500'>
          Yearly
        </option>
      </select>
    </form>
  )
}
