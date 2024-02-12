import '@/src/app/styles/globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const inter = Roboto({
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
