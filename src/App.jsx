import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Home from './routes/Home';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Cart />
      <Home />
    </>
  );
}

export default App;
