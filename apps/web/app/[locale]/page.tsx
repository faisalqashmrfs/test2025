import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('common');
  
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">XCarBox Web</h1>
    </main>
  );
}