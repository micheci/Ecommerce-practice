// Import required modules
import express, { json } from 'express';
import cors from 'cors';
import session from "express-session";
import passport from "passport"
import router from './routes/routes.js';

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(json());
// Enable CORS for all routes
app.use(cors());
app.use(session({
  secret: "bellaco",
  saveUninitialized:false,
  resave:false,
  cookie:{
    maxAge: 60*60*1000
  }
}))

// Use the router
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});