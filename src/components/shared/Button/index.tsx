// libraries
import type { FC } from 'react';

interface ButtonProps {
  title: string;
  className: string;
  onClick?: () => void;
}

const Button:FC<ButtonProps> = ({ title, className, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {title}
  </button>
);

export default Button;
