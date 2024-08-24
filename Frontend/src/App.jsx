import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/user/Login';
import SignupPage from './components/user/Signup';
import Product from './components/Product';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Quotes from './components/Quotes';
import Scroll from './components/Scroll';
import Home from './components/Home';
import Cart from './components/Cart';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/scroll" element={<Scroll />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

