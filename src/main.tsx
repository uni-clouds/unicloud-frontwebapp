import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Sentry from '@sentry/react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { BrowserTracing } from '@sentry/tracing'
import GlobalContext from './contexts'
import queryClient from './services/queryClient'
import App from './App'
import Error from './pages/Error'
import './styles/global.css'
import './i18n'

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: 'https://cc6dfff4f9e24d08bcf9ad8a239a57a7@o1235247.ingest.sentry.io/6440654',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <GlobalContext>
            <App />
          </GlobalContext>
        </QueryClientProvider>
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  </React.StrictMode>
)
