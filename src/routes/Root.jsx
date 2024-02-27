import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Cart from '../components/Cart';

const Root = ({ itemQty, onUpdate }) => {
  return (
    <>
      <Header />
      <Menu />
      <Cart itemQty={itemQty} onUpdate={onUpdate} />
      <Outlet />
    </>
  );
};

export default Root;
