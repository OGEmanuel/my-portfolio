import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center mx-auto h-max mt-auto items-center px-6 py-2 w-full">
      <p className="md:text-2xl font-semibold text-center">
        Ogunmola Emmanuel &copy;2023 v1
      </p>
      <p className="text-center">
        Illustrations from{' '}
        <Link className="underline" to="https://www.freepik.com/">
          Freepik
        </Link>{' '}
        and icons from{' '}
        <Link className="underline" to="https://iconscout.com/">
          Iconscout
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
