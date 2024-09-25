import "../styles/global.css";
import Head from "next/head";
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Little Cash</title>
        </Head>
        <Component {...pageProps} />
      </>
    </ApolloProvider>
  );
};

export default MyApp;