const Menu = () => {
  return (
    <div>
      <div
        aria-labelledby="drawer-navigation-label"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-300 w-72 dark:bg-gray-800"
        id="drawer-left-navigation"
        tabIndex="-1"
      >
        <h5
          className="text-base font-semibold text-gray-900 uppercase dark:text-gray-700"
          id="drawer-navigation-label"
        >
          Menu
        </h5>
        {/* CLOSE BTN */}
        <button
          aria-controls="drawer-left-navigation"
          className="text-gray-900 bg-transparent hover:bg-gray-400 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-gray-400"
          data-drawer-hide="drawer-left-navigation"
          type="button"
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
          <span className="sr-only">Close menu</span>
        </button>
        {/* CONTENT */}
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                className="flex items-center p-2 text-gray-400 rounded-lg dark:text-gray-500 hover:bg-gray-400 dark:hover:bg-gray-700 group"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="ms-3 text-gray-900">Home</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center p-2 text-gray-400 rounded-lg dark:text-gray-500 hover:bg-gray-400 dark:hover:bg-gray-700 group"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-900">
                  Products
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center p-2 text-gray-400 rounded-lg dark:text-gray-500 hover:bg-gray-400 dark:hover:bg-gray-700 group"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-700"
                  fill="none"
                  viewBox="0 0 18 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-900">
                  Sign In
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
