import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white text-black transition-all dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
