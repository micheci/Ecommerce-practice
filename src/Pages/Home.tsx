import { Container } from "@mui/material";
import Navbar from "../Components/Navbar";
import ProductsGrid from "../Components/ProductsGrid";
import ProductMenu from "../Components/ProductMenu";
import { useState } from "react";

import HeroBanner from "../Components/HeroBanner";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
    setSelectedCategory(category);
  };
  return (
    <Container maxWidth="false">
      <Navbar />
      <ProductMenu onCategorySelect={handleCategorySelect} />
      <HeroBanner />
      <ProductsGrid selectedCategory={selectedCategory} />
    </Container>
  );
};

export default Home;
