import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'
import global_en from '../src/utils/Translations/En/Global.json'
import global_ge from '../src/utils/Translations/Ge/Global.json'
import './App.css'
import '../src/sass/index.scss'

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('language') || 'en', // Get language from localStorage or default to 'en'
  resources: {
    en: {
      global: global_en,
    },
    ge: {
      global: global_ge,
    },
  },
})

const App = () => {
  const LanguageSetter = () => {
    const { i18n } = useTranslation()

    useEffect(() => {
      // Update localStorage when language changes
      localStorage.setItem('language', i18n.language)
    }, [i18n.language])

    return null // No need to render anything for this component
  }
  return (
    <I18nextProvider i18n={i18next}>
      <HelmetProvider>
        <LanguageSetter />
        <RouterProvider router={Router} />
      </HelmetProvider>
    </I18nextProvider>
  )
}

export default App
