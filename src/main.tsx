import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import GlobalContext from './contexts'
import App from './App'
import Error from './pages/Error'
import './styles/global.css'

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
        <GlobalContext>
          <App />
        </GlobalContext>
      </BrowserRouter>
    </Sentry.ErrorBoundary>
  </React.StrictMode>
)
