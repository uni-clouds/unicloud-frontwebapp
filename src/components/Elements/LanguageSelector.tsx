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
import { parseCookies, setCookie } from 'nookies'

export default function LanguageSelector() {
  const { i18n, t: translate } = useTranslation()

  const cookies = parseCookies()

  function setLanguageCookie(value: string) {
    setCookie(null, 'language', value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
      sameSite: true
    })
  }
  function setLangAttribute(lang: string) {
    if (lang === 'pt') document.documentElement.setAttribute('lang', 'pt-BR')
    if (lang === 'en') document.documentElement.setAttribute('lang', 'en-US')
    if (lang === 'es') document.documentElement.setAttribute('lang', 'es-ES')
    if (lang === 'fr') document.documentElement.setAttribute('lang', 'fr-FR')
  }

  useEffect(() => {
    if (cookies.language || cookies.language !== undefined) {
      // setCurrentLanguage(cookies.language)
      i18n.changeLanguage(cookies.language)
    } else {
      // setCurrentLanguage(i18n.resolvedLanguage),
      setLanguageCookie(i18n.resolvedLanguage)
    }
  }, [])

  useEffect(() => {
    setLanguageCookie(i18n.resolvedLanguage)
    localStorage.setItem('language', i18n.resolvedLanguage)
    setLangAttribute(i18n.resolvedLanguage)
  }, [i18n.resolvedLanguage])

  function changeLanguageHandler(event: SelectChangeEvent) {
    const newLanguage = event.target.value
    setLangAttribute(newLanguage)
    i18n.changeLanguage(newLanguage)
    // setCurrentLanguage(newLanguage)
  }

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: 'gb'
    },
    {
      code: 'pt',
      name: 'Português',
      flag: 'br'
    },
    {
      code: 'es',
      name: 'Español',
      flag: 'es'
    },
    {
      code: 'fr',
      name: 'Français',
      flag: 'fr'
    }
  ]

  function renderFlag(code: string, name: string) {
    return (
      <picture>
        <source
          type='image/webp'
          srcSet={`https://flagcdn.com/w20/${code}.webp,
          https://flagcdn.com/w40/${code}.webp 2x,`}
        />
        <source type='image/png' srcSet={`https://flagcdn.com/${code}.svg`} />
        <img
          src={`https://flagcdn.com/w20/${code}.webp`}
          className='w-6'
          alt={name}
        />
      </picture>
    )
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
          >
            <div className='flex gap-4 items-center'>
              {renderFlag(lang.flag, lang.name)}
              {lang.name}
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
