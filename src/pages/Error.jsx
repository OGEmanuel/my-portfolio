import { useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data;
  }
  if (error.status === 404) {
    message = error.data;
  }

  return (
    <>
      <NavBar />
      <h1>{message}</h1>
    </>
  );
};

export default ErrorPage;
