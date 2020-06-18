import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from 'react-beautiful-dnd';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    resetServerContext();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
