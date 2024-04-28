import express from "express";
import pool from "../db.js";
import { authenticateToken } from "./auth.js";

const router = express.Router();

// Getting all items
router.get("/", authenticateToken, async (req, res) => {
  try {
    console.log("hi");
    console.log(req.user.id, "req.user");
    const userId = req.user.id; // Extract the userId from req.user
    console.log(userId, "userID");
    const result = await pool.query("SELECT * FROM users where id = $1", [
      userId,
    ]);
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
