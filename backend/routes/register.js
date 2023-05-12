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
    name: joi.string().min(3).max(30).required(),
    email: joi.string().min(3).max(100).required().email(),
    password: joi.string().min(6).max(100).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already exist...");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(req.body.password, salt);

  user = await user.save();

  const token = genToken(user);

  res.status(200).send(token);
});

// module.exports = router;
export default router;
