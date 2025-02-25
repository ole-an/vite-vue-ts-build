import { reactive } from 'vue';
import { Path } from '@router/routes/types.ts';
import { IHeaderMenuItem } from '@core/components/Header/HeaderBase/types.ts';

export const headerMenu: IHeaderMenuItem[] = reactive([
  {
    id: 0,
    path: Path.MAIN,
    name: 'link1',
  },
  {
    id: 1,
    path: Path.UI_KIT,
    name: 'link2',
  },
  {
    id: 2,
    path: Path.MAIN,
    name: 'link3',
  },
  {
    id: 3,
    path: Path.MAIN,
    name: 'link4',
  },
  {
    id: 4,
    path: Path.MAIN,
    name: 'link5',
  },
]);
