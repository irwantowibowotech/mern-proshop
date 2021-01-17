import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // console.log(decoded); --> berisi id user, iat dan exp
      req.user = await User.findById(decoded.id).select("-password"); //select user berdasarkan ID dengan tidak menyertakan password untuk ditampilkan

      console.log(req.user);

      next();
    } catch (err) {
      console.error(err);

      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorization, no token");
  }
});

export { protect };
