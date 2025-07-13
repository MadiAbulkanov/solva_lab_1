// libraries
import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
// components
import NavBar from 'components/shared/NavBar';

interface PageLayoutProps {
  title: string;
}

const PageLayout:FC<PageLayoutProps> = ({ title }) => {
  const { pathname } = useLocation();

  return (
    <div className="page-layout-container">
      <NavBar />
      <h1 className="page-layout-title">{title}</h1>
      <p className="page-layout-subtitle">
        path:
        {pathname}
      </p>
    </div>
  );
};

export default PageLayout;
