import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Products from './pages/Products';
import Cases from './pages/Cases';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'cases',
        element: <Cases />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;