// const bcrypt = require("bcrypt");
// const express = require("express");
// const joi = require("joi");
// const { User } = require("../models/user");
// const genToken = require("../utils/genAuthToken");

import bcrypt from "bcrypt";
import express from "express";
import joi from "joi";
import { User } from "../models/user.js";
import genToken from "../utils/genAuthToken.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = joi.object({
    email: joi.string().min(3).max(100).required().email(),
    password: joi.string().min(6).max(100).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("User doesn't exist...");

  const isValid = await bcrypt.compare(req.body.password, user.password);

  if (!isValid) return res.status(400).send("email/password is invalid...");

  const token = genToken(user);
  res.status(200).send(token);
});

// module.exports = router;
export default router;
