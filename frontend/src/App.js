import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Categories from "./Pages/Categories";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product";
import LoginPage from "./Pages/Auth/LoginPage";
import Cart from "./Pages/Cart";
import RegisterPages from './Pages/Auth/RegisterPages.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
