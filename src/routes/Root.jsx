import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Cart from '../components/Cart';

const Root = ({ cartQty, cartItems, onRemove, itemQty, cartTotal }) => {
  return (
    <>
      <Header cartQty={cartQty} />
      <Menu />
      <Cart
        cartQty={cartQty}
        onRemove={onRemove}
        cartItems={cartItems}
        itemQty={itemQty}
        cartTotal={cartTotal}
      />
      <Outlet />
    </>
  );
};

export default Root;
