import ProductCard from './ProductCard';

const Cart = ({
  cartQty = 0,
  cartItems,
  onRemove,
  itemQty,
  cartTotal = 0,
  onUpdate,
}) => {
  return (
    <div>
      <div
        id="drawer-right-cart"
        className="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-cart-label"
      >
        <h4
          className="text-base font-semibold uppercase text-gray-900 dark:text-gray-700"
          id="drawer-cart-label"
        >
          Cart ({cartQty}) ${cartTotal}
        </h4>
        {/* CLOSE BTN */}
        <button
          type="button"
          data-drawer-hide="drawer-right-cart"
          aria-controls="drawer-right-cart"
          className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-900 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-400"
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
                  onRemove={onRemove}
                  isInCart={true}
                  itemQty={itemQty}
                  onUpdate={onUpdate}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
