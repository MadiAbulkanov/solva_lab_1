// assets
import amfokImg from 'assets/images/amfok.png';
import cupImg from 'assets/images/cup.png';
import gerbImg from 'assets/images/gerb.png';

export const cardsContent: { id:number, img: string, class: string, description: string }[] = [
  {
    id: 1,
    img: amfokImg,
    class: 'amfok',
    description: 'Являемся активным участником Ассоциации микрофинансовых организаций Казахстана (АМФОК)',
  },
  {
    id: 2,
    img: gerbImg,
    class: 'gerb',
    description: 'Работаем по лицензии АРРФР № 02.21.0004.М. от 06.03.2023 г. на осуществление микрофинансовой деятельност',
  },
  {
    id: 3,
    img: cupImg,
    class: 'cup',
    description: 'Компания Solva отмечена наградой Visa за первый карточный продукт, выпущенный МФО',
  },
];
