import i18next from 'i18next'

export function translateTS(tag: string) {
	return i18next.on('languageChanged', function (lng) {
		i18next.t(tag)
	})
}
