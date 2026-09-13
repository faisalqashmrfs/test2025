import de from './dictionaries/de.json';
import en from './dictionaries/en.json';
import fr from './dictionaries/fr.json';

export const locales = ['de', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

export const dictionaries = {
  de,
  en,
  fr,
};

export type Dictionary = typeof de;