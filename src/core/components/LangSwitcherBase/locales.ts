import { ILocale } from './types.ts';

export const locales: ILocale[] = [
  {
    code: 'ru',
    name: 'Русский',
  },
  {
    code: 'en',
    name: 'English',
  },
];

/*
 * https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes
 *
 * {
 *   ab: 'Abkhazian',
 *   hy: 'Armenian',
 *   az: 'Azerbaijani',
 *   be: 'Belarusian',
 *   ka: 'Georgian',
 *   kk: 'Kazakh',
 *   ky: 'Kirghiz; Kyrgyz',
 *   tg: 'Tajik',
 *   tt: 'Tatar',
 *   tk: 'Turkmen',
 *   uz: 'Uzbek',
 * }
 */
export const relativeLocales: string[] = [
  'ab',
  'hy',
  'az',
  'be',
  'ka',
  'kk',
  'ky',
  'tg',
  'tt',
  'tk',
  'uz',
];
