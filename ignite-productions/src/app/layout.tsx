import './globals.css';
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import { Providers } from '@/components/providers/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WinterballPopup } from '@/components/features/winterball-popup';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ignite Productions | Christ-Centered Music & Events',
    template: '%s | Ignite Productions',
  },
  description: 'Professional music production, live events, and creative services rooted in Christian excellence. Serving churches, ministries, and individuals with world-class production.',
  keywords: [
    'christian music production',
    'church events',
    'worship production',
    'live concerts',
    'event planning',
    'music recording',
    'digital marketing',
    'ministry services',
  ],
  authors: [{ name: 'Ignite Productions' }],
  creator: 'Ignite Productions',
  publisher: 'Ignite Productions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Ignite Productions',
    title: 'Ignite Productions | Christ-Centered Music & Events',
    description: 'Professional music production, live events, and creative services rooted in Christian excellence.',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ignite Productions - Christ-Centered Music & Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignite Productions | Christ-Centered Music & Events',
    description: 'Professional music production, live events, and creative services rooted in Christian excellence.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfairDisplay.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2d1b69" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 font-sans antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <WinterballPopup />
        </Providers>
      </body>
    </html>
  );
}