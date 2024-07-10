import localFont from 'next/font/local';

import type { Metadata } from 'next';
import { Navbar } from '~/components';
import { QueryProvider, SmoothScroll } from '~/providers';
import '~/styles/globals.css';

import { GrainEffect } from '~/components/grain-effect';
import { Toaster } from '~/components/ui/sonner';

const beatriceRegular = localFont({
  src: '../../public/beatrice-regular.woff2',
  variable: '--font-beatrice-regular',
});

const beatriceMedium = localFont({
  src: '../../public/beatrice-medium.woff2',
  variable: '--font-beatrice-medium',
});

const elgocAlt = localFont({
  src: '../../public/elgocAlt-medium.woff2',
  variable: '--font-elgocAlt',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://envoy1084.xyz'),
  title: 'EnvoyOS',
  description:
    'Hey! I am Vedant, a developer  based in India. I love to build things for the web.',
  applicationName: 'EnvoyOS',
  keywords: [
    'Developer',
    'Portfolio',
    'Web3',
    'Blockchain',
    'React',
    'Next.js',
  ],
  creator: 'Vedant Chainani',
  publisher: 'Vedant Chainani',
  manifest: '/manifest.json',
  icons: [{ rel: 'icon', url: '/logo.png' }],
  twitter: {
    card: 'summary_large_image',
    title: 'EnvoyOS',
    description:
      'Hey! I am Vedant, a developer  based in India. I love to build things for the web.',
    creator: '@Envoy_1084',
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `EnvoyOS`,
      },
    ],
  },
  openGraph: {
    title: 'EnvoyOS',
    description:
      'Hey! I am Vedant, a developer  based in India. I love to build things for the web.',
    type: 'website',
    locale: 'en_US',
    url: 'https://envoy1084.xyz',
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `EnvoyOS`,
      },
    ],
  },
  other: {
    'msapplication-tap-highlight': 'no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'EnvoyOS',
    'msapplication-TileColor': '#fff',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body
        className={`!overflow-x-hidden font-sans ${beatriceRegular.variable} ${elgocAlt.variable} ${beatriceMedium.variable}`}
      >
        <QueryProvider>
          <SmoothScroll>
            <GrainEffect />
            <Navbar />
            {children}
          </SmoothScroll>
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
