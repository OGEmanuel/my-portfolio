import React from 'react';
const Portfolio = React.lazy(() => import('../components/Portfolio'));

const PortfolioPage = () => {
  return (
    <React.Suspense fallback={<>...</>}>
      <Portfolio />
    </React.Suspense>
  );
};

export default PortfolioPage;
