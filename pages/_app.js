import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import Layout from '../components/Layout/Layout';
import itranslate from '../theme/itranslate';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={itranslate}>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
