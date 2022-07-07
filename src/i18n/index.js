import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

//translation files
//ENGLISH:
import enCommon from '../../public/locales/en/common.json'
import enLogin from '../../public/locales/en/login.json'
import enProfile from '../../public/locales/en/profile.json'
<<<<<<< HEAD
import enCustomersUsers from '../../public/locales/en/customers-users.json'
=======
>>>>>>> 254370b (conflit fixes)
//PORTUGUESE:
import ptCommon from '../../public/locales/pt/common.json'
import ptLogin from '../../public/locales/pt/login.json'
import ptProfile from '../../public/locales/pt/profile.json'
<<<<<<< HEAD
import ptCustomersUsers from '../../public/locales/pt/customers-users.json'
=======
>>>>>>> 254370b (conflit fixes)

const resources = {
  en: {
    common: enCommon,
    login: enLogin,
<<<<<<< HEAD
    profile: enProfile,
    customersUsers: enCustomersUsers
=======
    profile: enProfile
>>>>>>> 254370b (conflit fixes)
  },
  pt: {
    common: ptCommon,
    login: ptLogin,
<<<<<<< HEAD
    profile: ptProfile,
    customersUsers: ptCustomersUsers
=======
    profile: ptProfile
>>>>>>> 254370b (conflit fixes)
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
