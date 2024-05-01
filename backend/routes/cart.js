import express from "express";
import pool from "../db.js";
import { authenticateToken } from "./auth.js";

const router = express.Router();

// Inserts item into cart_table with userId and itemId
router.post("/", async (req, res) => {
  const { user_id, item_id, quantity } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO cart_items (user_id, item_id, quantity) VALUES ($1, $2, $3) RETURNING *",
      [user_id, item_id, quantity]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting cart item", error);
    res
      .status(500)
      .json({ error: "An error occurred while inserting cart item" });
  }
});

// Gets all cart items for a specific user
router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM cart_items WHERE user_id = $1",
      [user_id]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error getting cart items", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting cart items" });
  }
});

export default router;
