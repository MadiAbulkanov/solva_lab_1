// libraries
import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const NestedPage: FC = () => {
  const { contributionType } = useParams<{ contributionType: 'employees' | 'corporate' }>();
  let title = 'Вклад сотрудников';

  if (contributionType === 'corporate') {
    title = 'Корпоративный вклад';
  }

  return (
    <div className="page-layout-container">
      <h1 className="page-layout-title">{title}</h1>
      <p className="page-layout-subtitle">
        path:/contribution/
        {contributionType}
      </p>
    </div>
  );
};

export default NestedPage;
