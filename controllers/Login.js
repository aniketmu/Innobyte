import bcrypt from "bcrypt";
import User from "../mongodb/models/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

async function Login(req, res) {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "The user does not exist" });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign(
      { email, username: existingUser.username },
      process.env.SECRET,
      { expiresIn: "1h" }
    );
    
    res.status(200).json({message: "User successfully Logged in", token})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in User" });
  }
}

export default Login;
