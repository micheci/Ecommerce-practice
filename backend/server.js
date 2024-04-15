// Import required modules
import express, { json } from 'express';
import  pool  from './db.js';
import cors from 'cors';

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(json());
// Enable CORS for all routes
app.use(cors());


// Define routes

// Getting all items
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
// GET route get Hero Banner URL
app.get('/getHeroBanner', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM heroBanner');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
