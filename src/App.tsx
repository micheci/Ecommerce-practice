import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";

import ProductMenu from "./Components/ProductMenu";
import { useState } from "react";
import Cart from "./Pages/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
    setSelectedCategory(category);
  };

  return (
    <>
      <BrowserRouter>
        {/* <ProductMenu onCategorySelect={handleCategorySelect} /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<div>Not Found</div>} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
