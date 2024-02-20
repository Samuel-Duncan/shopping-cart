import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import Products from './routes/Products';

const Router = ({
  cartQty,
  onAdd,
  cartItems,
  onRemove,
  itemQty,
  cartTotal,
}) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Root
          cartQty={cartQty}
          cartItems={cartItems}
          onRemove={onRemove}
          itemQty={itemQty}
          cartTotal={cartTotal}
        />
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'products',
          element: <Products onAdd={onAdd} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
