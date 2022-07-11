import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

//translation files
//ENGLISH:
import enCommon from '../../public/locales/en/common.json'
import enLogin from '../../public/locales/en/login-register.json'
import enProfile from '../../public/locales/en/profile.json'
import enCustomersUsers from '../../public/locales/en/customers-users.json'
import enDashboard from '../../public/locales/en/dashboard.json'
import enPods from '../../public/locales/en/pods.json'
//PORTUGUESE:
import ptCommon from '../../public/locales/pt/common.json'
import ptLogin from '../../public/locales/pt/login-register.json'
import ptProfile from '../../public/locales/pt/profile.json'
import ptCustomersUsers from '../../public/locales/pt/customers-users.json'
import ptDashboard from '../../public/locales/pt/dashboard.json'
import ptPods from '../../public/locales/pt/pods.json'
//SPANISH:
import esCommon from '../../public/locales/es/common.json'
import esLogin from '../../public/locales/es/login-register.json'
import esProfile from '../../public/locales/es/profile.json'
import esCustomersUsers from '../../public/locales/es/customers-users.json'
import esDashboard from '../../public/locales/es/dashboard.json'
import esPods from '../../public/locales/es/pods.json'
//PORTUGUESE:
import frCommon from '../../public/locales/fr/common.json'
import frLogin from '../../public/locales/fr/login-register.json'
import frProfile from '../../public/locales/fr/profile.json'
import frCustomersUsers from '../../public/locales/fr/customers-users.json'
import frDashboard from '../../public/locales/fr/dashboard.json'
import frPods from '../../public/locales/fr/pods.json'

const resources = {
  en: {
    common: enCommon,
    login: enLogin,
    profile: enProfile,
    customersUsers: enCustomersUsers,
    dashboard: enDashboard,
    pods: enPods
  },
  pt: {
    common: ptCommon,
    login: ptLogin,
    profile: ptProfile,
    customersUsers: ptCustomersUsers,
    dashboard: ptDashboard,
    pods: ptPods
  },
  es: {
    common: esCommon,
    login: esLogin,
    profile: esProfile,
    customersUsers: esCustomersUsers,
    dashboard: esDashboard,
    pods: esPods
  },
  fr: {
    common: frCommon,
    login: frLogin,
    profile: frProfile,
    customersUsers: frCustomersUsers,
    dashboard: frDashboard,
    pods: frPods
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
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
