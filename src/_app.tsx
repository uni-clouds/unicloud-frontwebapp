import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import Layout from ''
import queryClient from './services/queryClient';
import { QueryClientProvider } from 'react-query';
import GlobalContext from './contexts';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

if (process.env.PROD) {
  Sentry.init({
    dsn: 'https://cc6dfff4f9e24d08bcf9ad8a239a57a7@o1235247.ingest.sentry.io/6440654',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  })
}

function App({ Component, pageProps }: AppPropsWithLayout){
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <Sentry.ErrorBoundary fallback={<Error />}>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <GlobalContext>
            <Component {...pageProps} />
          </GlobalContext>
        </QueryClientProvider>
      </Layout>
    </Sentry.ErrorBoundary>
  )
}
export default App
