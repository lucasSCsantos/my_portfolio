import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Home | Lucas Santana</title>
          <meta
            name="description"
            content="Sou um desenvolvedor web Full-Stack, aqui você encontra alguns projetos desenvolvidos por mim durante meu trabalho e estudo."
          />
          <meta
            property="og:description"
            content="Sou um desenvolvedor web Full-Stack, aqui você encontra alguns projetos desenvolvidos por mim durante meu trabalho e estudo."
          />
          <meta property="og:image" content="/frame.png" />
          <meta property="og:image:secure_url" content="/frame.png" />
          <meta property="twitter:image" content="/frame.png" />
          <meta property="twitter:image:src" content="/frame.png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/icon.png" />

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
