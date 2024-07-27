import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Public } from '@/layouts/Public';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function About() {
  const t = useTranslations('About');

  return (
    <Public>
      <p>{t('about_paragraph')}</p>
    </Public>
  );
}
