// libraries
import type { FC } from 'react';
// libraries
import { useEffect, useState } from 'react';

const PaymentSection: FC = () => {
  const [buttonText, setButtonText] = useState<string>('Оплатить');
  const mobile: number = 767;

  useEffect(() => {
    const updateButtonText = () => {
      if (window.innerWidth < mobile) {
        setButtonText('Получить деньги');
      } else {
        setButtonText('Оплатить');
      }
    };

    updateButtonText();
    window.addEventListener('resize', updateButtonText);
  }, []);

  return (
    <section className="section payment-section">
      <div className="payment-section-content">
        <h1 className="payment-section-title">
          Платежи можно внести прямо на сайте!
        </h1>
        <button className="payment-btn">{buttonText}</button>
      </div>
    </section>
  );
};

export default PaymentSection;
