export interface SliderConfig {
  title: string,
  unit: string,
  minValue: number,
  maxValue: number,
  step: number,
  limitMin: string,
  limitMax: string,
}

export const amountSliderConfig: SliderConfig = {
  title: 'Сумма микрокредита',
  unit: ' т',
  minValue: 200000,
  maxValue: 4000000,
  step: 100000,
  limitMin: 'от 200 тыс',
  limitMax: 'до 4 млн',
};

export const termSliderConfig: SliderConfig = {
  title: 'Срок микрокредитования',
  unit: ' мес',
  minValue: 6,
  maxValue: 36,
  step: 1,
  limitMin: 'от 6 месяцев',
  limitMax: 'до 3 лет',
};
