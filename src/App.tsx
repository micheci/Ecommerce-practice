import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";

import ProductMenu from "./Components/ProductMenu";
import { useState } from "react";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
