const Home = () => {
  return (
    <>
      <main className="">
        <div className="flex flex-col items-start sm:items-center space-y-3 sm:space-y-8 px-4 py-2 sm:p-4 mt-0 sm:mt-8 sm:text-center">
          <h2 className="sm:text-7xl text-4xl">Kith Fall Collection 2024</h2>
          <p className="sm:text-xl">
            Defined by light falltime hues, vintage-inspired silhouettes, and
            transitional fabrics.
          </p>
          <button
            type="button"
            className="text-neutral-300 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-center w-auto sm:w-64 h-auto sm:h-20"
          >
            Shop Now
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
