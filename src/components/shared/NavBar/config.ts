// types
import type { Navigation } from 'components/shared/INavigation';
// assets
import GlobeIcon from 'assets/icons/globe_icon.svg';
import MapIcon from 'assets/icons/map_icon.svg';
import PencilIcon from 'assets/icons/pencil_icon.svg';
import PhoneIcon from 'assets/icons/phone_icon.svg';
import TabIcon from 'assets/icons/tab_icon.svg';
import ThumbsUpIcon from 'assets/icons/thumbs_up_icon.svg';
import WomanSymbolIcon from 'assets/icons/woman_symbol.svg';

export interface NavItem extends Navigation {
  pathName: string;
  hideInBurger?: boolean;
  shouldShowInBurger?: boolean;
}

export const promoNavItems: NavItem[] = [
  {
    id: 1, description: 'Помощь', icon: ThumbsUpIcon, pathName: '/help',
  },

  {
    id: 2, description: 'Наш вклад в общество', icon: GlobeIcon, pathName: '/contribution',
  },
  {
    id: 3, description: 'Новости', icon: TabIcon, pathName: '/news',
  },
  {
    id: 4, description: 'Блог. Для дела', icon: PencilIcon, pathName: '/blog', hideInBurger: true,
  },
  {
    id: 5, description: 'Женское дело', icon: WomanSymbolIcon, pathName: '/female', shouldShowInBurger: true,
  },
  {
    id: 6, description: 'Контакты', icon: PhoneIcon, pathName: '/contacts',
  },
  {
    id: 7, description: 'Карта отделений', icon: MapIcon, pathName: '/map', shouldShowInBurger: true,
  },
  {
    id: 8, description: 'Портал', icon: WomanSymbolIcon, pathName: '/portal',
  },
];
