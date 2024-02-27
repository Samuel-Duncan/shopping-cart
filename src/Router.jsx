import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import Products from './routes/Products';

const Router = ({ itemQty }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root itemQty={itemQty} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'products',
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
