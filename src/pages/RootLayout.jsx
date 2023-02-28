import { Outlet } from 'react-router-dom';
// import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const RootLayout = () => {
  const location = useLocation();
  return (
    <section className="bg-gray-100 grid md:grid-rows-[15vh_85vh] grid-rows-[10vh_90vh] xl:overflow-hidden">
      <NavBar />
      {/* <AnimatePresence> */}
      {/* <div location={location} key={location.pathname}> */}
      <Outlet />
      {/* </div> */}
      {/* </AnimatePresence> */}
      {/* <Footer /> */}
    </section>
  );
};

export default RootLayout;
