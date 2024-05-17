import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Categories from "./Pages/Categories";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product";
import LoginPage from "./Pages/Auth/LoginPage";
import LogoutPages from "./Pages/Auth/LogoutPages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPages />} />
        <Route path="/cart" element={<LogoutPages />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
