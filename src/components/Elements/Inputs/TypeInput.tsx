import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SxProps
} from '@mui/material'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { SelectInputProps } from './types'
import { colors } from '../../../styles/colors'

const TypeSelect: ForwardRefRenderFunction<
  HTMLInputElement,
  SelectInputProps
> = ({ error, field }, ref) => {
  const styles: SxProps = {
    '.MuiFormLabel-root': {
      color: colors.base[300],
      '&.Mui-focused ': { color: colors.base[500] }
    },
    '& .MuiSelect-select': {
      paddingTop: '12px',
      paddingBottom: '14px'
    }
  }

  return (
    <FormControl sx={styles}>
      <InputLabel
        id='type-customer'
        htmlFor='type-customer'
        aria-label={`input-type-customer`}
      >
        Selecione o tipo de cliente
      </InputLabel>

      <Select
        {...field}
        aria-labelledby='select-type-customer'
        id='type-customer'
        aria-haspopup
        label='Selecione o tipo de cliente'
        inputProps={{
          name: 'type-customer',
          id: 'type-customer'
        }}
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: colors.light[200],
            borderRadius: 2
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.light[200]
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.brand[600],
            borderWidth: 2
          }
        }}
      >
        <MenuItem value={'partner'}>Partner</MenuItem>
        <MenuItem value={'customer'}>Customer</MenuItem>
      </Select>
    </FormControl>
  )
}
export const InputType = forwardRef(TypeSelect)
