import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fetchTodos } from "../store/todoSlice";
import { useEffect } from "react";
import Product from "./Product";

const ProductsGrid = ({ selectedCategory }) => {
  const dispatch = useAppDispatch();
  const allItems = useAppSelector((state) => state.todo.data);
  interface itemDataProps {
    item_id: number;
    item_name: string;
    pictureurl: string;
  }
  // Fetches the todos from the API
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  // NEed to add categrory
  const filteredProducts = selectedCategory
    ? allItems.filter((item) => item.category === selectedCategory)
    : allItems;

  return (
    <Grid container spacing={2}>
      {Array.isArray(allItems) &&
        allItems.map((item: itemDataProps, item_id: number) => (
          <Grid item xs={12} sm={6} md={3} key={item_id}>
            <Product {...item} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductsGrid;
