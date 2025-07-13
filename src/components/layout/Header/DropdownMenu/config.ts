// assets
import CardIcon from 'assets/icons/union.svg';

export type CategoryItem = { id: number, title: string, icon?: string };

export const privateIndividuals: CategoryItem[][] = [
  [
    {
      id: 1,
      title: 'Solva Карта',
      icon: CardIcon,
    },
    {
      id: 2,
      title: 'Микрокредит онлайн',
    },
  ],
  [{ id: 1, title: 'Рефинансирование кредита' }],
];

export const business: CategoryItem[][] = [
  [
    { id: 1, title: 'Для ИП и самозанятых' },
    { id: 2, title: 'Микрокредит для ИП' },
    { id: 3, title: 'Микрокредит для самозанятых' },
    { id: 4, title: 'Микрокредит на товары' },
  ],
  [
    { id: 1, title: 'Для ТОО' },
    { id: 2, title: 'Микрокредит для ТОО' },
    { id: 3, title: 'Факторинг' },
  ],
];
