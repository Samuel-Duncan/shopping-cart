import { useContext } from 'react';
import { CartContext } from '../App';
import ProductCard from './ProductCard';

const Cart = () => {
  const { cartItems, cartQty, cartTotal } = useContext(CartContext);

  return (
    <div>
      <div
        id="drawer-right-cart"
        className="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform"
        tabIndex="-1"
        aria-labelledby="drawer-cart-label"
      >
        <h4
          className="text-base font-semibold uppercase text-gray-900"
          id="drawer-cart-label"
        >
          Cart ({cartQty}) ${cartTotal}
        </h4>
        {/* CLOSE BTN */}
        <button
          type="button"
          data-drawer-hide="drawer-right-cart"
          aria-controls="drawer-right-cart"
          className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-900 hover:bg-gray-400"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span className="sr-only">Close Cart</span>
        </button>
        {/* CONTENT */}
        <div className="overflow-y-auto py-4">
          <ul role="list" className="space-y-2 font-medium">
            {cartItems &&
              cartItems.map((item) => (
                <ProductCard
                  key={item.product.id}
                  product={item.product}
                  isInCart={true}
                  itemQty={item.qty}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
