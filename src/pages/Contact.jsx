import React from 'react';
import Spinner from '../components/spinner';
const Contact = React.lazy(() => import('../components/Contact'));

const ContactPage = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Contact />
    </React.Suspense>
  );
};

export default ContactPage;
