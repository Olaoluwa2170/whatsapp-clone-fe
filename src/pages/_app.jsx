import "@/styles/globals.css";
import Head  from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Whatsapp</title>
      <link rel="shorcut icon" href="/favicon.png" />
    </Head>
  <Component {...pageProps} />
    </>
  );
}
