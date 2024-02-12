import { Metadata } from 'next';

import { ButtonPage } from '@/src/_pages/button';

export const metadata: Metadata = {
  title: 'Кнопка',
};

export default function Page() {
  return (
    <main style={{ flex: 1 }}>
      <ButtonPage />
    </main>
  );
}
