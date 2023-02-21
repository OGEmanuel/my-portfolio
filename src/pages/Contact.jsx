import React from 'react';
const Contact = React.lazy(() => import('../components/Contact'));

const ContactPage = () => {
  return (
    <React.Suspense fallback={<>...</>}>
      <Contact />
    </React.Suspense>
  );
};

export default ContactPage;
