import { useState } from 'react';
import Router from './Router';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = parseFloat(
    cartItems.reduce((acc, item) => acc + item.price, 0),
  ).toFixed(2);
  const [itemQty, setItemQty] = useState(null);

  const onUpdate = (productId, qty, price) => {
    setItemQty(qty);

    const updatedCart = cartItems.map((item) => {
      if (item.product.id === productId) {
        return {
          ...item,
          price: price,
          qty: qty,
        };
      }
      return item;
    });

    setCartItems(updatedCart);
  };

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
      onUpdate={onUpdate}
    />
  );
};

export default App;
