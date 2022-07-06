import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

//translation files
//ENGLISH:
import enCommon from '../../public/locales/en/common.json'
import enLogin from '../../public/locales/en/login.json'
//PORTUGUESE:
import ptCommon from '../../public/locales/pt/common.json'
import ptLogin from '../../public/locales/pt/login.json'

const resources = {
  en: {
    common: enCommon,
    login: enLogin
  },
  pt: {
    common: ptCommon,
    login: ptLogin
  }
}

i18n.use(initReactI18next).init({
  resources,
  //set default namespace
  defaultNS: 'common',
  //default language
  lng: localStorage.getItem('language')
    ? localStorage.getItem('language')
    : 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
