import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import register from "./routes/register.js";
import login from "./routes/login.js";
import stripe from "./routes/stripe.js";
import products from "./products.js";
import paypal from "./routes/paypal.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);
app.use("/api/paypal", paypal);

app.get("/", (req, res) => {
  res.send("Welcome to Online Shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

// web server
const port = process.env.PORT || 4000;

app.listen(port, console.log(`Server started on port ${port}`));

// Database
const dbUri = process.env.DB_URI;

mongoose
  .connect(dbUri)
  .then(() => console.log("MongoDB database connected successfully..."))
  .catch((error) => console.log("MongoDB connection failed ", error.message));
