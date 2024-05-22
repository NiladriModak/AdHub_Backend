const User = require("../models/userModel");
const Errorhandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    // console.log(req.headers.authorization);
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1];
      const decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedData.id);
      next();
    }
  } catch (error) {
    next(new Errorhandler("Not authorized", 400));
  }
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(new Errorhandler("You are not authorize for this part", 401));
    } else next();
  };
};
