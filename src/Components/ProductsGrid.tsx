import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fetchTodos } from "../store/todoSlice";
import { useEffect, useState } from "react";
import Product from "./Product";

const ProductsGrid = ({ selectedCategory }) => {
  const dispatch = useAppDispatch();
  const allItems = useAppSelector((state) => state.todo.data);
  interface itemDataProps {
    item_id: number;
    item_name: string;
    pictureurl: string;
    category: string;
  }
  const [filteredProducts1, setFilteredProducts] = useState();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    const filteredProducts = selectedCategory
      ? allItems.filter((item) => item.item_category === selectedCategory)
      : allItems;
    setFilteredProducts(filteredProducts);

    console.log(filteredProducts, "array"); // Logs the filtered products
  }, [allItems, selectedCategory]);

  return (
    <Grid container spacing={2}>
      {selectedCategory && filteredProducts1
        ? filteredProducts1.map((item: itemDataProps, item_id: number) => (
            <Grid item xs={12} sm={6} md={3} key={item_id}>
              <Product {...item} />
            </Grid>
          ))
        : allItems &&
          allItems.map((item: itemDataProps, item_id: number) => (
            <Grid item xs={12} sm={6} md={3} key={item_id}>
              <Product {...item} />
            </Grid>
          ))}
    </Grid>
  );
};

export default ProductsGrid;
