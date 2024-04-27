import express from "express";
import pool from "../db.js";
import { authenticateToken } from "./auth.js";

const router = express.Router();

// Getting all items
router.get("/", async (req, res) => {
  try {
    console.log("hi");
    const result = await pool.query("SELECT * FROM users limit 1");
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
