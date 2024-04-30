import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">lolTyler1</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Button variant="contained" component={Link} to="/signIn">
            Hello,Sign in
          </Button>
          <Button variant="contained">Sign up</Button>
          <Button
            variant="contained"
            onClick={() => {
              if (!token) {
                navigate("/signIn");
              } else {
                navigate("dashboard/cart");
              }
            }}
          >
            Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
