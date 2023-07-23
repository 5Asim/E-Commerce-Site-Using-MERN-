import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavigationBar/Navbar";
import React from "react";
import HomeScreen from "./screen/HomeSreen";
import ProductScreen from "./screen/ProductScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartScreen from "./screen/CartScreen";
import SigninScreen from "./screen/SigninScreen";
import SignUpScreen from "./screen/SignupScreen.js";
// import Products from "./Components/Products/products";
function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <Navbar/>
      <hr />
      <Routes>
        
        <Route path="/product/:slug" element={<ProductScreen />}></Route>
        <Route path = "/cart" element={<CartScreen />}></Route>
        <Route path="/signin" element={<SigninScreen />}></Route>
        <Route path="/signup" element={<SignUpScreen />}></Route>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
     
    </div>
    <footer>
      <div className="text-center">All Rights Reserved</div>
    </footer>
    </BrowserRouter>
  );
}

export default App;
