import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ContactPage from './pages/Contact';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
