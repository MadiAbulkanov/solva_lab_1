// libraries
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import Header from 'components/layout/Header/index';
import MainLayout from 'components/layout/MainLayout';
import ContributionLayout from 'components/shared/NavBar/ContributionLayout';
import NestedPage from 'components/shared/NavBar/ContributionLayout/NestedPage';
import PageLayout from 'components/shared/NavBar/PageLayout';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export const routesConfig: RouteConfig[] = [
  { path: '/help', element: <PageLayout title="Помощь" /> },
  { path: '/news', element: <PageLayout title="Новости" /> },
  { path: '/blog', element: <PageLayout title="Блог. Для дела" /> },
  { path: '/contacts', element: <PageLayout title="Контакты" /> },
  { path: '/female', element: <PageLayout title="Женское дело" /> },
  { path: '/map', element: <PageLayout title="Карта отделений" /> },
  { path: '/portal', element: <PageLayout title="Портал" /> },
];

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route
        element={(
          <div className="container">
            <MainLayout />
          </div>
      )}
        path="/"
      />
      {routesConfig.map((route: RouteConfig) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
      <Route element={<ContributionLayout title="Наш вклад в общество" />} path="/contribution">
        <Route element={<NestedPage />} path=":contributionType" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
