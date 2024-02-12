import '@/src/app/styles/globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Header } from '@/src/widgets/header';

const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Задание 1',
    default: 'Задание 1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
