const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      console.log("========= TOKEN RECEIVED =========");
      console.log(token);

      console.log("========= JWT SECRET =========");
      console.log(process.env.JWT_SECRET);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("========= DECODED TOKEN =========");
      console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password");

      console.log("========= LOGGED IN USER =========");
      console.log(req.user);

      return next();
    } catch (error) {
      console.log("========= JWT ERROR =========");
      console.log(error);

      return res.status(401).json({
        message: "Not authorized, token failed",
        error: error.message,
      });
    }
  }

  return res.status(401).json({
    message: "Not authorized, no token",
  });
};

module.exports = { protect };