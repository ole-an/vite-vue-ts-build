import { Path } from '@router/routes/types.ts';
import * as en from '@locales/en/base.json';

const {
  base: {
    header: {
      menu: { nav },
    },
  },
} = en;

export interface IHeaderMenuItem {
  id: number;
  path: Path | string;
  name: keyof typeof nav;
}
