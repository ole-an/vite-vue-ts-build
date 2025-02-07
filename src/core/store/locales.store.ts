import { defineStore, StateTree } from 'pinia';

export interface ILocale extends StateTree {
  currentLocale: string;
}

export const useLocalesStore = defineStore('localesStore', {
  state: (): ILocale => ({
    currentLocale: localStorage.getItem('locale') || 'ru',
  }),
  getters: {
    getLocale(state: ILocale): string {
      return state.currentLocale;
    },
  },
  actions: {
    setLocale(locale: string): void {
      this.currentLocale = locale;
    },
  },
});
