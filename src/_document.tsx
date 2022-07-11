import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel='stylesheet'
          />
          <link
            rel='icon'
            sizes='16x16'
            href='/assets/favicon.png'
            type='image/png'
          />
          <link rel='canonical' href='' />
          <meta
            name='keywords'
            content=''
          />
          <meta name='copyright' content='Uni.Cloud 2022' />
          <meta httpEquiv='content-language' content='pt-br' />
          <meta name='language' content='pt-br' />
          <meta name='theme-color' content='#7500ff' />
          <meta property='og:title' content='Broker Uni.Cloud' />
          <meta
            property='og:description'
            content=''
          />
          <meta property='og:image' content='' />
          <meta name='author' content='Uni.Cloud' />
          <meta
            name='description'
            content=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

