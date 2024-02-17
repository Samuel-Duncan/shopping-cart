import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Cart from '../components/Cart';

const Root = ({ cartQty }) => {
  return (
    <>
      <Header />
      <Menu cartQty={cartQty} />
      <Cart cartQty={cartQty} />
      <Outlet />
    </>
  );
};

export default Root;
