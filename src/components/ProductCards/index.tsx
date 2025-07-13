// libraries
import type { FC } from 'react';
import { useEffect, useState } from 'react';
// components
import ProductCard from 'components/ProductCards/ProductCard';
// types
import type { ICards } from 'components/shared/ICards';
// config
import { cardsContent, mobileCardsContent } from 'components/ProductCards/config';

const ProductCards: FC = () => {
  const [contents, setContents] = useState<ICards[]>(cardsContent);
  const mobileSize: number = 767;

  useEffect(() => {
    const updateCardContent = () => {
      if (window.innerWidth < mobileSize) {
        setContents(mobileCardsContent);
      } else {
        setContents(cardsContent);
      }
    };

    updateCardContent();
    window.addEventListener('resize', updateCardContent);
  }, []);

  return (
    <section className="section product-cards">
      <h1 className="title product-cards-title">Рекомендуемые продукты</h1>
      <div className="cards-block">
        { contents.map((card: ICards) => (
          <ProductCard key={card.id} description={card.description} price={card.price} title={card.title} />
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
