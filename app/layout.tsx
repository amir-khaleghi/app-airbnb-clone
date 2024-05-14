import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { ReactQueryProvider } from './components/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KashaneMashane',
  description: 'A Platform to rent your home',
  keywords:
    'home rental, vacation rental, Airbnb clone, rent your home, property rental',
  author: 'Your Name or Company Name',
  openGraph: {
    title: 'KashaneMashane',
    description: 'A Platform to rent your home',
    url: 'https://kashanehmashane.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://kashanehmashane.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_.23c4a6a7.png&w=256&q=75',
        width: 1200,
        height: 630,
        alt: 'KashaneMashane',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className=""
      lang="en"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body className={`${inter.className}  font-circular `}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
