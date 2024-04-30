// Importing necessary modules and functions
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
} from "@material-ui/core";
import { UserInfo } from "../Interfaces/user";
import UserFieldDetails from "../Components/UserFieldDetails";

const Dashboard = () => {
  // Getting the dispatch function from Redux
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Getting the user data from the Redux store
  const userInfo: UserInfo | null = useAppSelector((state) => state.user.data);
  console.log(userInfo, "userinfo");
  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    dispatch(fetchUserData(token));
  }, [dispatch]);

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Redirect the user to the home page
    navigate("/");
  };
  return (
    <Grid container>
      <Grid item xs={2}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button onClick={() => navigate("/dashboard/cart")}>
            <ListItemText primary="Cart" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
          {/* Add more ListItem components for additional menu items */}
        </List>
      </Grid>
      <Grid item xs={10}>
        <Paper style={{ padding: "1em" }}>
          <Typography variant="h5">User Info</Typography>
          <Typography>Name: {userInfo?.first_name}</Typography>
        </Paper>
        <UserFieldDetails userInfo={userInfo} />
      </Grid>
    </Grid>
  );
};

// Exporting the Dashboard component
export default Dashboard;
