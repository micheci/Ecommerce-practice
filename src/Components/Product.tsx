import { Box, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface itemDataProps {
  item_id: number;
  item_name: string;
  pictureurl: string;
}

const Product = (itemData: itemDataProps) => {
  return (
    <Link to={`/product/${itemData.item_id}`}>
      <Box
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          alt="The house from the offer."
          src={itemData.pictureurl}
        />
        <Typography
          sx={{ alignItems: "center", textAlign: "center" }}
          variant="h6"
        >
          {itemData.item_name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Rating name="disabled" value={4} disabled />
          <Typography variant="h6">$99.99{itemData.item_id}</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default Product;
