import React from 'react';
const Home = React.lazy(() => import('../components/Home'));

const HomePage = () => {
  return (
    <React.Suspense fallback={<>...</>}>
      {' '}
      <Home />{' '}
    </React.Suspense>
  );
};

export default HomePage;
