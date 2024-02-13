import { Metadata } from 'next';

import { YearPage } from '@/src/_pages/year';

export const metadata: Metadata = {
  title: 'Текущий год',
};

export default function Page() {
  return (
    <main style={{ flex: 1 }}>
      <YearPage />
    </main>
  );
}
