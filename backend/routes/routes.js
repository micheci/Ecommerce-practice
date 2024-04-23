import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Getting all items
router.get('/', async (req, res) => {
  try {
    console.log(req.session)
    console.log(req.sessionID)
    req.session.visited=true;
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// GET route get Hero Banner URL
router.get('/getHeroBanner', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM heroBanner');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
// Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userNameResult=await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if(!userNameResult){
            res.json({ status: false, message: 'User not found'});
            return;
        }
        const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
        if (result.rows.length > 0) {
            req.session.user = result.rows[0];
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
export default router;