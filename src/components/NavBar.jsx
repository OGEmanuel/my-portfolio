import { NavLink } from 'react-router-dom';
import traffic from '../assets/traffic-signal.svg';

const NavBar = () => {
  return (
    <nav className="flex w-full py-7 gap-10 justify-center">
      <img src={traffic} alt="" className="w-[5rem]" />
      <NavLink
        to=""
        className={({ isActive }) =>
          `text-lg font-semibold p-5 transition ${
            isActive ? 'bg-red-500 text-white' : 'text-red-500'
          } rounded-[10px] self-center  hover:bg-red-500 hover:text-white`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="portfolio"
        className={({ isActive }) =>
          `text-lg font-semibold p-5 transition ${
            isActive ? 'bg-yellow-500 text-white' : 'text-yellow-500'
          } rounded-[10px] self-center  hover:bg-yellow-500 hover:text-white`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          `text-lg font-semibold p-5 transition ${
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
