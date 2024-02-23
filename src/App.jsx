import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Router from './Router';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = parseFloat(
    cartItems.reduce((acc, item) => acc + item.price, 0),
  ).toFixed(2);
  const [itemQty, setItemQty] = useState(null);

  const isInCart = (items, id) => {
    return items.some((item) => item.product.id === id);
  };

  const onUpdate = (productId, qty, price) => {
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

  const addToCart = (productToAdd, price, qty) => {
    if (isInCart(cartItems, productToAdd.id)) {
      setCartItems(
        cartItems.map((item) => {
          if (item.product.id === productToAdd.id) {
            return {
              ...item,
              price: price + item.price,
              qty: qty + item.qty,
            };
          } else {
            return item;
          }
        }),
      );
    } else {
      // Create a new product object with updated price and quantity
      const newProduct = {
        product: {
          ...productToAdd,
          id: uuid(),
        },
        price: price,
        qty: qty,
      };
      setItemQty(qty);
      setCartItems([...cartItems, newProduct]);
    }
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
