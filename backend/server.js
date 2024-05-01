// Import required modules
import express, { json } from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import auth from "./routes/auth.js";
import user from "./routes/user.js";
import cart from "./routes/cart.js";
import passport from "passport";
import process from "process";

// Create an Express application
const app = express();
const port = 3000;
dotenv.config();
////////////////////////////////// Middleware //////////////////////////////////
// Middleware to parse JSON requests
app.use(json());
// Enable CORS for all routes
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
/////////////////////////////////////////////////
// Use the router
app.use("/", router);
app.use("/auth", auth);
app.use("/user", user);
app.use("/cart", cart);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
