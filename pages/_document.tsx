import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {

      // Register RNW app
      AppRegistry.registerComponent('Main', () => Main)

      // @ts-ignore
      const { getStyleElement: rnwGetStyleElement } = AppRegistry.getApplication('Main');

      // Wrap pages in Styled-Components
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      // Build styles
      const styles = [
        initialProps.styles,
        sheet.getStyleElement(),
        <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
        rnwGetStyleElement()
      ];

      return {
        ...initialProps,
        styles: React.Children.toArray(styles),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head />
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
