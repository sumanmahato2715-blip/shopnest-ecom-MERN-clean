const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

async function resetPassword() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("123456", 10);

   const result = await User.updateOne(
  { email: "sumanmahato2715@gmail.com" },
  {
    $set: {
      password: hashedPassword,
      role: "admin"
    }
  }
);

    console.log(result);
    console.log("Password changed to: 123456");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

resetPassword();