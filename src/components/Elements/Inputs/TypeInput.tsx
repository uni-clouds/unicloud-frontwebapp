import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SxProps,
  useTheme
} from '@mui/material'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { SelectInputProps } from './types'
import { colors } from '../../../styles/colors'
import { useTranslation } from 'react-i18next'

const TypeSelect: ForwardRefRenderFunction<
  HTMLInputElement,
  SelectInputProps
> = ({ error, name, label, values, ...field }, ref) => {
  const { palette } = useTheme()
  const { t: translate } = useTranslation()

  const styles: SxProps = {
    '.MuiFormLabel-root': {
      color: palette.mode === 'dark' ? colors.neutral[50] : 'inherit',
      width: '100%',
      '&.Mui-focused ': {
        color: palette.mode === 'dark' ? colors.neutral[50] : 'inherit'
      }
    },
    '& .MuiSelect-select': {
      paddingTop: '12px',
      paddingBottom: '14px'
    },
    '& .Mui-checked': {
      color: palette.mode === 'dark' ? colors.neutral[50] : 'inherit'
    }
  }
  const stylesInput: SxProps = {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor:
        palette.mode === 'dark' ? colors.neutral[700] : colors.light[200],
      width: '100%',
      borderRadius: '0.375rem'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor:
        palette.mode === 'dark' ? colors.neutral[700] : colors.light[200]
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: colors.brand[600],
      borderWidth: 2
    },
    '& .Mui-error': {
      border: colors.red.custom
    }
  }
  return (
    <FormControl sx={styles}>
      <InputLabel
        id='type-customer'
        htmlFor='type-customer'
        aria-label={'input-type-customer'}
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
        {translate(error?.message)}
      </p>
    </FormControl>
  )
}
export const InputType = forwardRef(TypeSelect)
