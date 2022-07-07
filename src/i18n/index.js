import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

//translation files
//ENGLISH:
import enCommon from '../../public/locales/en/common.json'
import enLogin from '../../public/locales/en/login.json'
import enProfile from '../../public/locales/en/profile.json'
import enCustomersUsers from '../../public/locales/en/customers-users.json'
//PORTUGUESE:
import ptCommon from '../../public/locales/pt/common.json'
import ptLogin from '../../public/locales/pt/login.json'
import ptProfile from '../../public/locales/pt/profile.json'
import ptCustomersUsers from '../../public/locales/pt/customers-users.json'

const resources = {
  en: {
    common: enCommon,
    login: enLogin,
    profile: enProfile,
    customersUsers: enCustomersUsers
  },
  pt: {
    common: ptCommon,
    login: ptLogin,
    profile: ptProfile,
    customersUsers: ptCustomersUsers
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
