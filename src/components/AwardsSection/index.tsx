// libraries
import type { FC } from 'react';
import { cardsContent } from 'components/AwardsSection/config';
// assets
import NextIcon from 'assets/icons/next_slide.svg';

const AwardsSection: FC = () => (
  <section className="section awards-section">
    <h1 className="title awards-section-title">Наши награды</h1>
    <button aria-label="Next" className="next-btn">
      {/* <NextIcon className="next-btn-img" /> */}
      <img alt="next-btn-img" className="next-btn-img" src={NextIcon} />
    </button>
    <div className="awards-section-cards">
      { cardsContent.map((card) => (
        <div key={card.id} className="awards-section-card">
          <img alt="amfok" className={`${card.class}-img`} src={card.img} />
          <p className="awards-section-card-content">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AwardsSection;
