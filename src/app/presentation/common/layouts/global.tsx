import { Roboto } from '@next/font/google';
import { FooterTag } from '~/app/presentation/common/components';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin-ext']
});

interface GlobalLayoutProps {
  children: React.ReactNode;
  title?: string;
}

function GlobalLayout({ children, title }: GlobalLayoutProps) {
  return (
    <>
      <title>{title}</title>
      <main className={roboto.className}>{children}</main>
      <FooterTag />
    </>
  );
}

export default GlobalLayout;
