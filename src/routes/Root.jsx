import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Cart from '../components/Cart';

const Root = ({ itemQty }) => {
  return (
    <>
      <Header />
      <Menu />
      <Cart itemQty={itemQty} />
      <Outlet />
    </>
  );
};

export default Root;
