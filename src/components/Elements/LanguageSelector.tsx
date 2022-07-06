import { useTranslation } from 'react-i18next'
import React, { useEffect, useRef } from 'react'

export default function LanguageSelector() {
  const { i18n, t } = useTranslation()
  const languageSwitch = useRef()

  useEffect(() => {
    localStorage.setItem('language', i18n.resolvedLanguage)
    console.log('initial language', localStorage.getItem('language'))
  }, [i18n.resolvedLanguage])

  function changeLanguageHandler() {
    const languageSelect = languageSwitch.current
    // i18n.changeLanguage(newLanguage.value)
    i18n.changeLanguage(languageSelect.value)
  }

  return (
    <div className='flex gap-3 items-center border-light-300 dark:border-zinc-700 border rounded-md pl-4 overflow-hidden bg-white custom-dark'>
      <label className='text-sm'>{t('languageSelect')}</label>
      <select
        ref={languageSwitch}
        name='lang'
        id='lang'
        defaultValue={i18n.resolvedLanguage}
        onChange={changeLanguageHandler}
        className=' text-sm text py-2 bg-zinc-100 dark:bg-zinc-700 border-none focus:outline-transparent focus:ring-transparent outline-transparent '
      >
        <option value='en'>🇬🇧 English</option>
        <option value='pt'>🇧🇷 Português</option>
      </select>
    </div>
  )
}
