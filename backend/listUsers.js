const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

async function listUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const users = await User.find({}, { name: 1, email: 1, role: 1, _id: 0 });

    console.log(users);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

listUsers();