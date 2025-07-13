// libraries
import type { FC } from 'react';
// types
import type { SliderConfig } from 'components/Calculator/config';

interface SliderProps {
  config: SliderConfig;
  value: number;
  onChange: (value: number) => void;
}

const RangeSlider:FC<SliderProps> = ({ config, value, onChange }) => (
  <div className="range-slider">
    <div className="range-slider-header">
      <p className="range-slider-title">{config.title}</p>
      <span className="range-slider-current-value">
        {value}
        {config.unit}
      </span>
    </div>
    <input
      className="range-slider-input"
      max={config.maxValue}
      min={config.minValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.valueAsNumber);
      }}
      step={config.step}
      type="range"
      value={value}
    />
    <div className="range-slider-limits">
      <span className="range-slider-limit-value">{config.limitMin}</span>
      <span className="range-slider-limit-value">{config.limitMax}</span>
    </div>
  </div>
);

export default RangeSlider;
