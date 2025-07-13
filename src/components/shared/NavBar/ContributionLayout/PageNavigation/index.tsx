// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const PageNavigation: FC = () => (
  <nav className="page-layout-navigation">
    <Link className="page-layout-navigation-link nav-link" to="employees">Вклад сотрудников</Link>
    <Link className="page-layout-navigation-link nav-link" to="corporate">Корпоративный вклад</Link>
  </nav>
);

export default PageNavigation;
