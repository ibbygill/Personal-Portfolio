import Theme from "../styles/theme";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Personal Portfolio Ibby Gill</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}