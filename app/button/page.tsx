import { Metadata } from 'next';

import { ButtonPage } from '@/src/_pages/button';

export const metadata: Metadata = {
  title: 'Кнопка',
};

export default function Home() {
  return (
    <main style={{ height: '100%' }}>
      <ButtonPage />
    </main>
  );
}
