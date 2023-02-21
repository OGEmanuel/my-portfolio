import React from 'react';
import Spinner from '../components/spinner';
const Home = React.lazy(() => import('../components/Home'));

const HomePage = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      {' '}
      <Home />{' '}
    </React.Suspense>
  );
};

export default HomePage;
