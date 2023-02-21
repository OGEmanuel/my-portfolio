import { NavLink } from 'react-router-dom';
import traffic from '../assets/traffic-signal.svg';

const NavBar = () => {
  return (
    <nav className="flex w-full xl:py-7 py-4 gap-4 md:gap-10 justify-center">
      <img src={traffic} alt="" className="w-[3rem] md:w-[5rem]" />
      <NavLink
        to=""
        className={({ isActive }) =>
          `md:text-lg font-semibold md:p-5 p-2 transition ${
            isActive ? 'bg-red-500 text-white' : 'text-red-500'
          } rounded-[10px] self-center  hover:bg-red-500 hover:text-white`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="portfolio"
        className={({ isActive }) =>
          `md:text-lg font-semibold md:p-5 p-2 transition ${
            isActive ? 'bg-yellow-500 text-white' : 'text-yellow-500'
          } rounded-[10px] self-center  hover:bg-yellow-500 hover:text-white`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          `md:text-lg font-semibold md:p-5 p-2 transition ${
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
