import '~/styles/global.css';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
