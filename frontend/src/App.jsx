import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/website/Home";

import Product from "./pages/website/product";
import Dashboard from "./pages/website/Dashboard";
import ProductDashboard from "./pages/website/ProductDashboard";
import AddProduct from "./pages/website/AddProduct";
import UpdateProduct from "./pages/website/UpdateProduct";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ProductDashboard" element={<ProductDashboard />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
    </Routes>
  );
}

export default App;
