import Head from 'next/head';
import typography from '../lib/typography';

export default function Home() {
  return (
    <>
      <Head>
        <title>next-template</title>
      </Head>

      <h1 className={typography.title}>Hello world</h1>
    </>
  );
}
