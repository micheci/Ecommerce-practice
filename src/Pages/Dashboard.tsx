import React, { useEffect } from "react";
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
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.data);
  useEffect(() => {
    dispatch(fetchUserData()).then((result) => {
      dispatch(setUserInfo(result.payload[0]));
    });
    console.log(userInfo, "userInfo");
  }, [dispatch]);
  useEffect(() => {
    console.log(userInfo, "userInfo");
  }, [userInfo]);
  return (
    <Grid container>
      <Grid item xs={2}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="Menu Item 1" />
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
          <Typography>Name: {userInfo?.username}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
