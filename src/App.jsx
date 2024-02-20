import { useState } from 'react';
import Router from './Router';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const [itemQty, setItemQty] = useState(null);

  const addToCart = (product, price, qty) => {
    setItemQty(qty);

    setCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        product: product,
        price: price,
        qty: qty,
      },
    ]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.product.id !== productId),
    );
  };

  return (
    <Router
      cartQty={cartQty}
      onAdd={addToCart}
      cartItems={cartItems}
      onRemove={removeFromCart}
      itemQty={itemQty}
      cartTotal={totalPrice}
    />
  );
};

export default App;
