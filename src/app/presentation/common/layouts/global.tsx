import { Roboto } from '@next/font/google';
import Head from 'next/head';

const roboto = Roboto({ weight: ['300', '700'] });

interface GlobalProps {
  children: React.ReactNode;
}

function GlobalLayout({ children }: GlobalProps) {
  return (
    <section className={roboto.className}>
      <Head>
        <title>Next.js</title>
      </Head>
      {children}
    </section>
  );
}

export default GlobalLayout;
