import { setCookie } from 'nookies'

export function setLangAttribute(lang: string) {
  document.documentElement.setAttribute('lang', addCountryToLanguage(lang))
}

export function setCookieByKey(key: string, value: string) {
  setCookie(null, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    sameSite: true
  })
}

export function addCountryToLanguage(lang: string) {
  if (lang === 'pt') return 'pt-BR'
  if (lang === 'en') return 'en-US'
  if (lang === 'es') return 'es-ES'
  if (lang === 'fr') return 'fr-FR'
}
