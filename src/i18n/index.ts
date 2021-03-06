import i18n from 'i18next'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

//translation files
//ENGLISH:
import enCommon from '../../locales/en/common.json'
import enLogin from '../../locales/en/login-register.json'
import enProfile from '../../locales/en/profile.json'
import enCustomersUsers from '../../locales/en/customers-users.json'
import enDashboard from '../../locales/en/dashboard.json'
import enPods from '../../locales/en/pods.json'
import enValidation from '../../locales/en/validation.json'
//PORTUGUESE:
import ptCommon from '../../locales/pt/common.json'
import ptLogin from '../../locales/pt/login-register.json'
import ptProfile from '../../locales/pt/profile.json'
import ptCustomersUsers from '../../locales/pt/customers-users.json'
import ptDashboard from '../../locales/pt/dashboard.json'
import ptPods from '../../locales/pt/pods.json'
import ptValidation from '../../locales/pt/validation.json'
//SPANISH:
import esCommon from '../../locales/es/common.json'
import esLogin from '../../locales/es/login-register.json'
import esProfile from '../../locales/es/profile.json'
import esCustomersUsers from '../../locales/es/customers-users.json'
import esDashboard from '../../locales/es/dashboard.json'
import esPods from '../../locales/es/pods.json'
import esValidation from '../../locales/es/validation.json'
//FRENCH:
import frCommon from '../../locales/fr/common.json'
import frLogin from '../../locales/fr/login-register.json'
import frProfile from '../../locales/fr/profile.json'
import frCustomersUsers from '../../locales/fr/customers-users.json'
import frDashboard from '../../locales/fr/dashboard.json'
import frPods from '../../locales/fr/pods.json'
import frValidation from '../../locales/fr/validation.json'

const resources = {
  en: {
    common: enCommon,
    login: enLogin,
    profile: enProfile,
    customersUsers: enCustomersUsers,
    dashboard: enDashboard,
    pods: enPods,
    validation: enValidation
  },
  pt: {
    common: ptCommon,
    login: ptLogin,
    profile: ptProfile,
    customersUsers: ptCustomersUsers,
    dashboard: ptDashboard,
    pods: ptPods,
    validation: ptValidation
  },
  es: {
    common: esCommon,
    login: esLogin,
    profile: esProfile,
    customersUsers: esCustomersUsers,
    dashboard: esDashboard,
    pods: esPods,
    validation: esValidation
  },
  fr: {
    common: frCommon,
    login: frLogin,
    profile: frProfile,
    customersUsers: frCustomersUsers,
    dashboard: frDashboard,
    pods: frPods,
    validation: frValidation
  }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    //set the languages resources
    resources,
    //set default namespace
    defaultNS: 'common',
    //default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
