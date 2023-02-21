import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const RootLayout = () => {
  return (
    <section className="bg-gray-100 h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default RootLayout;
