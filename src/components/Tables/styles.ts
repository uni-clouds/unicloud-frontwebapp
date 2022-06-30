import { colors } from '../../styles/colors'

export const stylesCheckboxTable = {
  '&.Mui-checked': {
    color: colors.brand[600]
  },
  '&.MuiCheckbox-indeterminate': {
    color: colors.brand[600]
  }
}
export const stylesToolbar = {
  pl: { sm: 2 },
  pr: { xs: 1, sm: 1 },
  justifyContent: 'flex-end'
}

export const stylesCellUsers = {
  border: 'none'
}

export const checkboxCellUsers = {
  color: 'secondary',
  '&.Mui-checked': {
    color: colors.brand[600]
  }
}

export const stylesLastCellUsers = {
  border: 'none',
  borderRadius: 2,
  borderTopRightRadius: 1,
  borderBottomRightRadius: 1
}

export const stylesTableUsers = {
  minWidth: 750,
  borderCollapse: 'separate !important',
  borderSpacing: '0px 16px !important'
}
