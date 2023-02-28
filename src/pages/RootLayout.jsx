import { Outlet } from 'react-router-dom';
// import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const RootLayout = () => {
  return (
    <section className="bg-gray-100 grid md:grid-rows-[15vh_85vh] grid-rows-[10vh_90vh] xl:overflow-hidden">
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </section>
  );
};

export default RootLayout;
