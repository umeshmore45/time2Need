import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat&family=Sarabun&family=Sarabun:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css"
          />
          <link rel="stylesheet" href="instantsearch.css" />
        </Head>
        <body style={{margin:'0'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
