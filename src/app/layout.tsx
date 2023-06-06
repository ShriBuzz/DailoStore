import './globals.css';

import Providers from '@/utils/provider';
import MantineProverWrapper from '@/utils/mantine_provider';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Dailo store',
  description: 'Ecommerce store for Dailo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <MantineProverWrapper>
            <NavBar />
            {children}
            <Footer />
          </MantineProverWrapper>
        </Providers>
      </body>
    </html>
  );
}
