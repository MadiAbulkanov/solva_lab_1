// libraries
import type { FC } from 'react';
// components
import Button from 'components/shared/Button';

interface CardProps {
  title: string;
  description: string;
  price: string;
}

const ProductCard: FC<CardProps> = ({ title, description, price }) => (
  <div className="product-card">
    <h3 className="card-title">{title}</h3>
    <p className="card-description">
      <span className="card-price">{price}</span>
      {description}
    </p>
    <Button className="card-btn" title="Получить деньги" />
  </div>
);

export default ProductCard;
