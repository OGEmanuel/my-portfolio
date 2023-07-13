import { NavLink } from 'react-router-dom';
import traffic from '../assets/traffic-signal.svg';
import { motion } from 'framer-motion';

const NavBar = () => {
  const handlePortfolioClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav className="flex w-full gap-4 md:gap-10 justify-center">
      <motion.img
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 75,
        }}
        src={traffic}
        alt=""
        className="w-[3rem] md:w-[5rem]"
      />
      <NavLink
        to=""
        className={({ isActive }) =>
          `md:text-lg font-semibold md:px-5 md:py-3 px-3 py-1 transition ${
            isActive ? 'bg-red-500 text-white' : 'text-red-500'
          } rounded-[10px] self-center  hover:bg-red-500 hover:text-white`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="portfolio"
        onClick={handlePortfolioClick}
        className={({ isActive }) =>
          `md:text-lg font-semibold md:px-5 md:py-3 px-2 py-1 transition ${
            isActive ? 'bg-yellow-500 text-white' : 'text-yellow-500'
          } rounded-[10px] self-center  hover:bg-yellow-500 hover:text-white`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          `md:text-lg font-semibold md:px-5 md:py-3 px-2 py-1 transition ${
            isActive ? 'bg-green-500 text-white' : 'text-green-500'
          } rounded-[10px] self-center hover:bg-green-500 hover:text-white`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
