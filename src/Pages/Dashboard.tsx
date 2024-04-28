// Importing necessary modules and functions
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserData, setUserInfo } from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
} from "@material-ui/core";

const Dashboard = () => {
  // Getting the dispatch function from Redux
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Getting the user data from the Redux store
  const userInfo = useAppSelector((state) => state.user.data) as UserInfo;

  useEffect(() => {
    console.log("useEffect running");
    const token = localStorage.getItem("token") as string;
    console.log(token, "spidr");
    dispatch(fetchUserData(token)).then((result) => {
      console.log("fetchUserData result", result);
      dispatch(setUserInfo(result.payload[0]));
    });
  }, [dispatch]);

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
          {/* Add more ListItem components for additional menu items */}
        </List>
      </Grid>
      <Grid item xs={10}>
        <Paper style={{ padding: "1em" }}>
          <Typography variant="h5">User Info</Typography>
          <Typography>Name: {userInfo?.first_name}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

// Exporting the Dashboard component
export default Dashboard;
