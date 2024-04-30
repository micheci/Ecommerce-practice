import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Link,
  Container,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInData } from "../Interfaces/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: SignInData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        data
      );
      console.log(response);
      if (response.data.status == true) {
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);
        // Set the default axios authorization header
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        console.log("die");
        // redirect to new page
        navigate("/dashboard");
      } else {
        toast.error(response.data.message);
      }

      console.log(response.data);
    } catch (error) {
      console.error(
        "There has been a problem with your axios operation: ",
        error
      );
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Grid container justifyContent="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper style={{ padding: 20, marginTop: 20 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h5">Sign In</Typography>
                </Grid>
                <Grid item>
                  <TextField
                    {...register("username", { required: true })}
                    label="Username"
                    type="text"
                    variant="outlined"
                    fullWidth
                    error={errors.username ? true : false}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    {...register("password", { required: true, minLength: 5 })}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    error={errors.password ? true : false}
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
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
