import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider, GlobalStyleComponent } from "styled-components";
import theme from "../styles/theme";
import { ServerStyleSheet } from "styled-components";
import { SnackbarProvider } from "notistack";
import { UniformTracker } from "@uniformdev/optimize-tracker-react";
import { createDefaultTracker } from "@uniformdev/optimize-tracker-browser";
import intentManifest from "../lib/intentManifest.json";
import Head from 'next/head';

const localTracker = createDefaultTracker({ intentManifest });

function MyApp({ Component, pageProps }) {
  const defaultDescription = '';
  const defaultOGURL = '';
  const defaultOGImage = '';
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{pageProps.title || ''}</title>
        <meta
          name="description"
          content={pageProps.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={pageProps.url || defaultOGURL} />
        <meta property="og:title" content={pageProps.title || ''} />
        <meta
          property="og:description"
          content={pageProps.description || defaultDescription}
        />
        <meta name="twitter:site" content={pageProps.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={pageProps.ogImage || defaultOGImage} />
        <meta property="og:image" content={pageProps.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <StyledEngineProvider injectFirst>
        <SnackbarProvider maxSnack={2}>
          <ThemeProvider theme={theme}>
            <UniformTracker trackerInstance={localTracker}>
              <Component {...pageProps} />
            </UniformTracker>
          </ThemeProvider>
        </SnackbarProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
