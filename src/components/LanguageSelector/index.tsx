import { useTranslation } from 'react-i18next'
import React, { useEffect, useRef, useState } from 'react'
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	SxProps,
	useTheme
} from '@mui/material'
import { colors } from '../../styles/colors'
import { parseCookies } from 'nookies'
import RenderFlag from './RenderFlag'
import { languages } from './data'
import { setLangAttribute, setCookieByKey } from './util'

export default function LanguageSelector() {
	const { i18n, t: translate } = useTranslation()

  const cookies = parseCookies()

  useEffect(() => {
		if (cookies.language || cookies.language !== undefined) {
			i18n.changeLanguage(cookies.language)
		} else {
			setCookieByKey('language', i18n.resolvedLanguage)
		}
	}, [])

  useEffect(() => {
		setCookieByKey('language', i18n.resolvedLanguage)
		localStorage.setItem('language', i18n.resolvedLanguage)
		setLangAttribute(i18n.resolvedLanguage)
	}, [i18n.resolvedLanguage])

  function changeLanguageHandler(event: SelectChangeEvent) {
		const newLanguage = event.target.value
		setLangAttribute(newLanguage)
		i18n.changeLanguage(newLanguage)
	}

  const { palette } = useTheme()
	const stylesLabel: SxProps = {
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
			height: '100%',
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
	const stylesMenuItem: SxProps = {
		color: palette.mode === 'dark' ? colors.neutral[50] : 'inherit'
  }

  return (
		<FormControl size='small' sx={stylesLabel}>
			<InputLabel id='language-select-label'>
				{translate('languageSelect')}
			</InputLabel>
			<Select
				labelId='language-select-label'
				id='language-select'
				value={i18n.resolvedLanguage}
				label={translate('languageSelect')}
				onChange={changeLanguageHandler}
				sx={stylesInput}
			>
				{languages.map((lang) => (
					<MenuItem
						value={lang.code}
						key={`langSwitch-${lang.code}`}
						aria-label={translate('languageSelect')}
						aria-valuetext={i18n.resolvedLanguage}
						aria-selected={
							lang.code === i18n.resolvedLanguage ? 'true' : 'false'
            }
						sx={stylesMenuItem}
					>
						<div className='flex gap-4 items-center'>
							<RenderFlag code={lang.flag} name={lang.name} />
							{lang.name}
						</div>
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
