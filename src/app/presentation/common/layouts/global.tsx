import { Roboto } from '@next/font/google';

const roboto = Roboto({ weight: ['300', '400', '700'] });

interface GlobalLayoutProps {
  children: React.ReactNode;
  title?: string;
}

function GlobalLayout({ children, title }: GlobalLayoutProps) {
  return (
    <>
      <title>{title}</title>
      <main className={roboto.className}>{children}</main>
    </>
  );
}

export default GlobalLayout;
