import express from "express";
import pool from "../db.js";
import { authenticateToken } from "./auth.js";

const router = express.Router();

// Getting all items
router.get("/", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // Extract the userId from req.user and we get it from auhenicateToken
    const result = await pool.query("SELECT * FROM users where users_id = $1", [
      userId,
    ]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
