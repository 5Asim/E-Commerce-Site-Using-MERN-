import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavigationBar/Navbar";
import React from "react";
import HomeScreen from "./screen/HomeSreen";
import ProductScreen from "./screen/ProductScree";
// import Products from "./Components/Products/products";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <hr />
      <Routes>
        <Route path="/product/:slug" element={<ProductScreen/>}></Route>
        <Route path="/" element={<HomeScreen/>}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
