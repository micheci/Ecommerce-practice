import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Link,
  Container,
} from "@mui/material";

const SignIn = () => {
  return (
    <Container>
      <Grid container justifyContent="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper style={{ padding: 20, marginTop: 20 }}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5">Sign In</Typography>
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
