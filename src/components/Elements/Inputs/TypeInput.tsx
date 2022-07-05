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
> = ({ error, name, label, values, ...field }, ref) => {
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
  const stylesInput: SxProps = {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: colors.light[200],
      borderRadius: '0.375rem'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.light[200]
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.brand[600],
      borderWidth: 2
    }
  }
  return (
    <FormControl sx={styles}>
      <InputLabel
        id='type-customer'
        htmlFor='type-customer'
        aria-label={`input-type-customer`}
      >
        {label}
      </InputLabel>

      <Select
        {...field}
        aria-labelledby={`select-type-${name}`}
        id={`type-${name}`}
        aria-haspopup
        label='Selecione o tipo de cliente'
        inputProps={{
          name: `type-${name}`,
          id: `type-${name}`
        }}
        sx={stylesInput}
      >
        {values?.map((value) => (
          <MenuItem value={value} sx={{ textTransform: 'capitalize' }}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <p
        className={`text-red-custom text-xs py-1.5 peer-absolute inset-x-0 -bottom-7 transition-all delay-75 ease-in ${
          error ? 'visible' : 'invisible'
        }`}
        role='alert'
      >
        {error?.message}
      </p>
    </FormControl>
  )
}
export const InputType = forwardRef(TypeSelect)
