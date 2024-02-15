const Cart = () => {
  return (
    <div>
      <div
        id="drawer-right-cart"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-cart-label"
      >
        <h5
          className="text-base font-semibold text-gray-900 uppercase dark:text-gray-700"
          id="drawer-cart-label"
        >
          Cart
        </h5>
        {/* CLOSE BTN */}
        <button
          type="button"
          data-drawer-hide="drawer-right-cart"
          aria-controls="drawer-right-cart"
          className="text-gray-900 bg-transparent hover:bg-gray-400 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-3 h-3"
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
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium"></ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
