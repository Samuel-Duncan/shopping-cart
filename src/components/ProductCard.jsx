import { useState } from 'react';

const ProductCard = ({ product, onClick }) => {
  const [qty, setQty] = useState(1);
  const initialPrice = qty * product.price;
  const price = parseFloat(initialPrice.toFixed(2));

  const onInc = () => {
    setQty((quantity) => quantity + 1);
  };

  const onDec = () => {
    setQty((quantity) => quantity - 1);
  };

  return (
    <li className="flex w-full max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img
          className="h-[350px] w-[500px] rounded-t-lg object-contain p-8"
          src={product.image}
          alt={product.title}
        />
      </a>
      <div className="flex flex-col justify-between px-5 pb-5">
        <div>
          <a href="#">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h3>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <button
              onClick={() => onDec()}
              disabled={qty <= 1}
              className="inline-flex items-center rounded-l border border-r border-gray-200 bg-white px-2 py-1 text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <div className="inline-flex select-none items-center border-b border-t border-gray-100 bg-gray-100 px-4 py-1 text-gray-600 hover:bg-gray-100">
              {qty}
            </div>
            <button
              onClick={() => onInc()}
              className="inline-flex items-center rounded-r border border-r border-gray-200 bg-white px-2 py-1 text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {`$${price}`}
          </span>
          <button
            onClick={() => onClick(product, price, qty)}
            href="#"
            className="rounded-lg bg-[#050708] px-5 py-2.5 text-center text-lg font-medium text-neutral-300 hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-neutral-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;