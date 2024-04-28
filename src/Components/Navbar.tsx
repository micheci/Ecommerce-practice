import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchUserData } from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

const Navbar = () => {
  return (
    <Container maxWidth="false">
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
          <Button variant="contained" component={Link} to="/signIn">
            Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
