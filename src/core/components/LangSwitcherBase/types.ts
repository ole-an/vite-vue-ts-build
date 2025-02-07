export enum LangName {
  RUS = 'rus',
  ENG = 'eng',
}

export enum LangLabel {
  RUSSIAN = 'Русский',
  ENGLISH = 'English',
}

export interface ILocale {
  code: string;
  name: string;
}
