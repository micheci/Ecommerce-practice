import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import process from "process";

const router = express.Router();

// Sign up
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    //Check if username already
    const userNameResult = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (userNameResult.rowCount) {
      res.json({ status: false, message: "Username already exists" });
      return;
    }

    // Time to hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Inserting into the database
    await pool.query(
      "INSERT INTO users (username, password,created_at) VALUES ($1, $2,NOW())",
      [username, hashedPassword]
    );

    res.json({ status: true, message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userNameResult = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (!userNameResult.rowCount) {
      res.json({ status: false, message: "User not found" });
      return;
    }
    if (await bcrypt.compare(password, userNameResult.rows[0].password)) {
      const userId = userNameResult.rows[0].id;
      console.log("Signing token with user ID:", userId);
      const token = jwt.sign({ id: userId }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ status: true, message: "Login successful", token: token });
    } else {
      res.json({ status: false, message: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Middleware to authenticate token
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log(req.user, "user on auth.js");
    next(); // pass the execution off to whatever request the client intended
  });
};

export default router;
