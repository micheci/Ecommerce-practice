import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Card";
import { useEffect, useState } from "react";

function App() {
  // Check if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []); // Removed isAuthenticated from the dependency array

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
          <Route
            path="dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/signIn" />
            }
          />
          <Route
            path="dashboard/cart"
            element={isAuthenticated ? <Cart /> : <Navigate to="/signIn" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
