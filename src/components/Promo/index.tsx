// libraries
import type { FC } from 'react';
import { useEffect, useState } from 'react';
// components
import Button from 'components/shared/Button';
import NavBar from 'components/shared/NavBar';

const Promo: FC = () => {
  const [buttonText, setButtonText] = useState<string>('Получить карту');
  const mobileSize: number = 767;

  useEffect(() => {
    const updateButtonText = () => {
      if (window.innerWidth < mobileSize) {
        setButtonText('Получить деньги!');
      } else {
        setButtonText('Получить карту');
      }
    };

    updateButtonText();
    window.addEventListener('resize', updateButtonText);
  }, []);

  return (
    <>
      <section className="promo-section">
        <a className="conditions-link" href="/">Читать условия</a>
        <h1 className="promo-title">Авто по лайту</h1>
        <p className="promo-subtitle">Пользуйтесь Картой Лайт и выиграйте автомобиль и денежные призы!</p>
        <Button className="promo-button" title={buttonText} />
      </section>
      <NavBar />
    </>
  );
};

export default Promo;
