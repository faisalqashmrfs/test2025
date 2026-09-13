import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '@xcarbox/i18n';

// استيراد القواميس ثابتاً لضمان تضمين Webpack لها بدون أخطاء المسارات
import enMessages from '../../packages/platform/i18n/dictionaries/en.json';
import deMessages from '../../packages/platform/i18n/dictionaries/de.json';
import frMessages from '../../packages/platform/i18n/dictionaries/fr.json';

const messagesMap: Record<string, any> = {
  en: enMessages,
  de: deMessages,
  fr: frMessages,
};

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? defaultLocale;
  const activeLocale = locales.includes(currentLocale as any) 
    ? currentLocale 
    : defaultLocale;

  return {
    locale: activeLocale,
    messages: messagesMap[activeLocale] || messagesMap[defaultLocale],
  };
});