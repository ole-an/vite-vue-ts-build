import { IconName } from '@core/components/IconBase';

export enum LangCode {
  RU = 'ru',
  EN = 'en',
}

export enum LangLabel {
  RUSSIAN = 'Русский',
  ENGLISH = 'English',
}

export interface ILocale {
  code: string;
  name: string;
}

export interface ILanguagesList {
  code: LangCode;
  label: LangLabel;
  icon: IconName;
}
