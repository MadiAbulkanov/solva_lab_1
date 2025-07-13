// libraries
import type { FC } from 'react';
import {
  useCallback, useEffect, useState,
} from 'react';
// components
import RangeSlider from 'components/Calculator/RangeSlider';
import Button from 'components/shared/Button';
// configs
import { amountSliderConfig, termSliderConfig } from 'components/Calculator/config';

// libraries
import { debounce } from 'lodash';

const amountValue = 1200000;
const termValue = 36;
const commission = 1.2;
const timeout = 300;

const Calculator: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('individual');
  const [paymentSumValue, setPaymentSumValue] = useState<number>();
  const [amount, setAmount] = useState<number>(amountValue);
  const [term, setTerm] = useState<number>(termValue);

  const calculateMonthlyPayment = useCallback(() => {
    const individualPaymentSum = amount / term;
    const businessPaymentSum = (amount / term) * commission;
    const paymentSum = (
      activeTab === 'individual' ? individualPaymentSum : businessPaymentSum
    );

    setPaymentSumValue(Math.round(paymentSum));
  }, [
    amount,
    term,
    activeTab,
  ]);

  useEffect(() => {
    const debouncedCalculation = debounce(calculateMonthlyPayment, timeout);

    debouncedCalculation();

    return () => debouncedCalculation.cancel();
  }, [calculateMonthlyPayment]);

  return (
    <section className="section calculator">
      <h1 className="title calculator-title">Рассчитайте условия на калькуляторе</h1>
      <div className="calculator-tabs">
        <Button
          className={`switch-button ${activeTab === 'individual' ? 'switch-button-active' : ''}`}
          onClick={() => setActiveTab('individual')}
          title="Частным лицам"
        />
        <Button
          className={`switch-button ${activeTab === 'business' ? 'switch-button-active' : ''}`}
          onClick={() => setActiveTab('business')}
          title="Для бизнеса"
        />
      </div>
      <div className="calculator-body">
        <div className="calculator-sliders">
          <RangeSlider config={amountSliderConfig} onChange={setAmount} value={amount} />
          <RangeSlider config={termSliderConfig} onChange={setTerm} value={term} />
        </div>
        <div className="calculator-summary">
          <p className="calculator-payments-label">Ежемесячный платёж</p>
          <p className="calculator-payments-value">
            {paymentSumValue}
            т
          </p>
          <Button className="calculator-submit-button" title="Получить деньги" />
        </div>
        <p className="calculator-disclaimer">
          Расчет калькулятора произведен по ставкам,
          действующим при условии оформления финансовой защиты к микрокредиту.
          Не является публичной офертой
        </p>
      </div>
    </section>
  );
};

export default Calculator;
