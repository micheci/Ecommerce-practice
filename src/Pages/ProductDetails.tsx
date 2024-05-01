import React from "react";
import { useParams } from "react-router-dom";
import { blueGrey, red, lightGreen, blue } from "@mui/material/colors";
import { useAppDispatch } from "../store/store";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { addCartItems } from "../store/cartSlice";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
}

// This is a placeholder for the actual product data
const product: Product = {
  id: 1,
  name: "Product Name",
  image: "https://via.placeholder.com/150",
  price: 99.99,
  size: "M",
  color: "Blue",
};

const ProductDetails = () => {
  const { item_id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  // Fetch product data based on `id` and display it

  // Getting function from store to send item to cart in db
  const handleAddToCart = () => {
    // Send the item to the cart in the database
    dispatch(addCartItems({ userId: 1, itemId: 2 })); // Redirect the user to the cart page
  };

  return (
    <Box marginX="auto" marginTop={4} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h5">${product.price}</Typography>
          <Typography variant="body1">
            Size:
            <Select
              value={product.size}
              onChange={() => {
                /* handle size change */
              }}
            >
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
              <MenuItem value="x-large">X-Large</MenuItem>
            </Select>
          </Typography>{" "}
          {/* Color Picker */}
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel
                value="red"
                control={
                  <Radio
                    sx={{
                      color: red[800],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label="red"
              />
              <FormControlLabel
                value="black"
                control={
                  <Radio
                    sx={{
                      color: blueGrey[800],
                      "&.Mui-checked": {
                        color: blueGrey[600],
                      },
                    }}
                  />
                }
                label="black"
              />
              <FormControlLabel
                value="blue"
                control={
                  <Radio
                    sx={{
                      color: blue[800],
                      "&.Mui-checked": {
                        color: blue[600],
                      },
                    }}
                  />
                }
                label="blue"
              />
              <FormControlLabel
                value="sageGreen"
                control={
                  <Radio
                    sx={{
                      color: lightGreen[800],
                      "&.Mui-checked": {
                        color: lightGreen[600],
                      },
                    }}
                  />
                }
                label="Sage Green"
              />
            </RadioGroup>
          </FormControl>{" "}
          <Box mt={2}>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              color="primary"
              style={{ width: "100%" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
