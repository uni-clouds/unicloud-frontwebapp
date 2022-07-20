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
  pl: { sm: 0 },
  pr: { xs: 0 },
  justifyContent: 'flex-start'
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

export const stylesTableClients = {
  borderCollapse: 'separate !important',
  borderSpacing: '0px 8px !important',
  minWidth: 500
}

export const stylesPaperClients = {
  width: '100%',
  overflow: 'hidden',
  borderRadius: 2,
  boxShadow: 0
}
export const stylesContainerClients = {
  minHeight: 415,
  minWidth: 350,
  px: 2
}
