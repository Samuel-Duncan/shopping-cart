import { useState, useEffect, useContext, useReducer } from 'react';
import { ProductContext } from '../App';

const qtyReducer = (qty, action) => {
  switch (action.type) {
    case 'increment': {
      return qty + 1;
    }
    case 'decrement': {
      return qty - 1;
    }
    case 'reset': {
      return 1;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};

const ProductCard = ({ product, itemQty = 1, isInCart = false }) => {
  const [qty, dispatch] = useReducer(qtyReducer, itemQty);
  const price = qty * product.price;
  const [addedToCart, setAddedToCart] = useState(false);
  const buttonColor = addedToCart ? 'bg-green-500' : 'bg-black';
  const { addToCart, removeFromCart, onUpdate } = useContext(ProductContext);

  useEffect(() => {
    if (onUpdate) {
      onUpdate(product.id, qty, price);
    }
  }, [qty]);

  const onAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1250);
  };

  const handleIncrement = () => {
    dispatch({
      type: 'increment',
      qty: qty + 1,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'decrement',
      qty: qty - 1,
    });
  };

  const handleReset = () => {
    dispatch({
      type: 'reset',
      qty: 1,
    });
  };

  return (
    <li className="flex w-full max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:h-auto">
      <a href="#">
        <img
          className="h-[250px] w-[500px] rounded-t-lg object-contain p-8 sm:h-[350px]"
          src={product.image}
          alt={product.title}
        />
      </a>
      <div className="flex h-full flex-col justify-between px-5 pb-5">
        <div>
          <a href="#">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">
              {product.title}
            </h3>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <button
              onClick={() => handleDecrement()}
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
              onClick={() => handleIncrement()}
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
          <span className="text-3xl font-bold text-gray-900">
            {`$${price.toFixed(2)}`}
          </span>
          {!isInCart ? (
            <button
              onClick={() => {
                addToCart(product, price, qty);
                onAddToCart();
                handleReset();
              }}
              href="#"
              className={`${buttonColor} ${addedToCart ? 'hover:bg-green-500' : 'hover:bg-[#050708]/90'} rounded-lg px-5 py-2.5 text-center text-lg font-medium text-neutral-300 transition-colors  focus:outline-none`}
            >
              {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          ) : (
            <button
              onClick={() => {
                removeFromCart(product.id);
                handleReset();
              }}
              href="#"
              className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-lg font-medium text-neutral-200 hover:bg-red-600 focus:outline-none"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
