// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface PrimaryNavProps {
  title: string;
  config: { id:number, description: string }[]
}

const PrimaryNav: FC<PrimaryNavProps> = ({ config, title }) => (
  <nav className="primary-nav-column">
    <ul className="primary-nav-links">
      <li className="primary-nav-item">{title}</li>
      { config.map((link: { id:number, description: string }) => (
        <li key={link.id} className="primary-nav-item">
          <Link className="primary-nav-link" to="/">
            {link.description}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default PrimaryNav;
