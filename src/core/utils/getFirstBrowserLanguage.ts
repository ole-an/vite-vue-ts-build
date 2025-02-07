export function getFirstBrowserLanguage(): string {
  const nav: Navigator = window.navigator;
  const browserLanguagePropertyKeys: string[] = [
    'languages',
    'language',
    'browserLanguage',
    'userLanguage',
  ];

  let language: string;
  let i: number | string;

  if (Array.isArray(nav.languages)) {
    for (i = 0; i < nav.languages.length; i++) {
      language = nav.languages[i];
      if (language && language.length) {
        return language.slice(0, 2);
      }
    }
  }

  for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
    language = nav[
      browserLanguagePropertyKeys[i] as keyof typeof nav
    ] as keyof typeof Navigator;
    if (language && language.length) {
      return language.slice(0, 2);
    }
  }

  return '';
}
