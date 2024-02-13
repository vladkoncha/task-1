import { Metadata } from 'next';

import { FormPage } from '@/src/_pages/form';

export const metadata: Metadata = {
  title: 'Форма',
};

export default function Page() {
  return (
    <main style={{ flex: 1 }}>
      <FormPage />
    </main>
  );
}
