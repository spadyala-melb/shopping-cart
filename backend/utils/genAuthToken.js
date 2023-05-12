// const jwt = require("jsonwebtoken");

import jwt from "jsonwebtoken";

const genToken = (user) => {
  const jwtSecret = process.env.JWT_SECRET;

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    jwtSecret
  );

  return token;
};

// module.exports = genToken;
export default genToken;
