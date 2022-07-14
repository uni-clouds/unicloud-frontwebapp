import { parseCookies, setCookie } from 'nookies'

export function setLangAttribute(lang: string) {
  if (lang === 'pt') document.documentElement.setAttribute('lang', 'pt-BR')
  if (lang === 'en') document.documentElement.setAttribute('lang', 'en-US')
  if (lang === 'es') document.documentElement.setAttribute('lang', 'es-ES')
  if (lang === 'fr') document.documentElement.setAttribute('lang', 'fr-FR')
}

export function setCookieByKey(key: string, value: string) {
  setCookie(null, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    sameSite: true
  })
}
