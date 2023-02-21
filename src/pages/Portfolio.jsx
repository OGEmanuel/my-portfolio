import React from 'react';
import Spinner from '../components/spinner';
const Portfolio = React.lazy(() => import('../components/Portfolio'));

const PortfolioPage = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Portfolio />
    </React.Suspense>
  );
};

export default PortfolioPage;
