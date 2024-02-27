import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cartQty } = useContext(CartContext);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolledDown(scrollTop > 15);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${isScrolledDown ? 'bg-gray-400 bg-opacity-100 shadow-lg' : 'bg-opacity-0'} duration-250 fixed top-0 z-10 w-full transition-all`}
      >
        <div className="flex items-center justify-between px-3 py-4">
          {/* MENU */}
          <div className="text-center">
            <button
              aria-controls="drawer-left-navigation"
              className=" rounded-md px-0.5 py-0.5 text-sm hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              data-drawer-show="drawer-left-navigation"
              data-drawer-target="drawer-left-navigation"
              data-drawer-placement="left"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>
          </div>
          {/* LOGO */}

          <h1 className="min-w-20 max-w-20">
            <Link to="/">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className=""
                viewBox="0 0 900 383"
              >
                <path d="M0 191.5V383h900V0H0zm117-77c0 28.3.3 51.5.8 51.5s18.2-23.2 39.6-51.5L196.3 63h30.9c16.9 0 30.8.2 30.8.5s-16.4 22.2-36.4 48.7l-36.5 48.2 1.6 3c.9 1.7 19.8 37.4 42 79.4s40.3 76.5 40.3 76.7-13.6.4-30.2.3l-30.1-.3-30.1-57.7c-16.6-31.8-30.4-57.7-30.7-57.5s-7.5 8.7-15.7 19.2l-15.1 19-.1 38.7V320H63V63h54zm252 77V320h-54V63h54zM596 86v23h-66v211h-54V109h-65V63h185zm98 26.5V162h89V63h54v257h-55V212h-88v108h-54V63h54z" />
              </svg>
            </Link>
          </h1>

          {/* CART */}
          <button
            aria-controls="drawer-right-cart"
            className=" rounded-md px-1 py-1 text-sm hover:bg-neutral-300 focus:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            data-drawer-target="drawer-right-cart"
            data-drawer-show="drawer-right-cart"
            data-drawer-placement="right"
            type="button"
          >
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <title>Shopping Bag</title>
              <path d="M17,4.5v-1.5c0-.8-.31-1.55-.88-2.12s-1.32-.88-2.12-.88h-4c-.8,0-1.55,.31-2.12,.88s-.88,1.32-.88,2.12v1.5H0V21.5H24V4.5h-7Zm-8.5-1.5c0-.4,.16-.78,.44-1.06,.28-.28,.66-.44,1.06-.44h4c.4,0,.78,.16,1.06,.44,.28,.28,.44,.66,.44,1.06v1.5h-7v-1.5Zm14,17H1.5V6H22.5v14Z" />
            </svg>
            <span className="absolute translate-x-[-50%] translate-y-[-103%]">
              {cartQty}
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
