import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="mt-2 flex flex-col items-start space-y-8 px-4 py-2 sm:mt-8 sm:items-center sm:space-y-16 sm:p-4 sm:text-center">
          <h2 className="text-4xl sm:text-8xl">Kith Fall Collection 2024</h2>
          <Link to="products">
            <button
              type="button"
              className="inline-flex h-auto w-auto items-center justify-center rounded-lg bg-[#050708] px-5 py-2.5 text-center text-lg font-medium text-neutral-300 hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-neutral-300 sm:h-20 sm:w-64 sm:text-xl"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
