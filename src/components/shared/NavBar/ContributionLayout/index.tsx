// libraries
import type { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// components
import NavBar from 'components/shared/NavBar';
import PageNavigation from 'components/shared/NavBar/ContributionLayout/PageNavigation';

interface ContributionLayoutProps {
  title: string;
}

const ContributionLayout:FC<ContributionLayoutProps> = ({ title }) => {
  const { pathname } = useLocation();

  return (
    <div className="page-layout-container">
      <NavBar />
      <h1 className="page-layout-title">{title}</h1>
      <p className="page-layout-subtitle">
        path:
        {pathname}
      </p>
      <PageNavigation />
      <Outlet />
    </div>
  );
};

export default ContributionLayout;
