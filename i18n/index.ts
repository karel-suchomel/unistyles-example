import * as Localization from 'expo-localization'
import i18n, { LanguageDetectorAsyncModule } from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'

import { getStringData, StorageKeys, storeData } from '~/services/storage'

export const resources = {
  en,
} as const
export const LOCALES = ['en'] as const
export type AvailableLocale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: string = LOCALES[0]
export const NAMESPACES = ['common', 'features', 'errors'] as const
export const DEFAULT_NS = 'common'

export type Locale = 'en'

const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async () => {
    const userLocale = getStoredLocale()
    const detectedLocale = userLocale ?? Localization.getLocales()[0].languageCode ?? DEFAULT_LOCALE
    return Promise.resolve(detectedLocale)
  },
  cacheUserLanguage: (lang: string) => {
    storeLocale(lang as Locale)
  },
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    fallbackLng: 'en',
    ns: NAMESPACES,
    defaultNS: DEFAULT_NS,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

export function getStoredLocale(): Locale | null {
  const data = getStringData(StorageKeys.Language)
  return data ? (data as Locale) : null
}

export function storeLocale(value: Locale) {
  storeData(StorageKeys.Language, value)
}

export async function changeLanguage(lang: Locale) {
  await i18n.changeLanguage(lang)
}

export async function setUserLocale(locale: Locale) {
  storeLocale(locale)
  await changeLanguage(locale)
}

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom resources type
    defaultNS: typeof DEFAULT_NS
    resources: (typeof resources)['en']
  }
}
