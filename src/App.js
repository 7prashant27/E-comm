import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Navbar from './styles/Navbar';
import { useContext } from 'react';
import CartProvider from './context/cart.context';
import Counterplus from './components/Counterplus';

function App() {
  const ProductListPage = React.lazy(() => import('./components/ProductListPage'))
  const ProductDetailPage = React.lazy(() => import('./components/ProductDetailPage'))

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path="/" element = {<Counterplus/>} /> */}          
            <Route path="/" element={<Suspense><ProductListPage /> </Suspense>} />
            <Route path="/product/:productId" element={<Suspense> <ProductDetailPage /></Suspense>} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
