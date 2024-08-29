import './globals.css';
import Header from '@/app/components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Company Profile',
  description: 'Company profile website built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
