import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Model/model.user.js";

export const registerUser = async ({ username, email, password, role }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("Email already registered");

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed, role: role || 'admin' });
  return user;
};

export const loginUser = async ({ username, password }) => {
  if (!username) throw new Error("Username is required");
  const user = await User.findOne({ username: { $regex: new RegExp(`^${username.trim()}$`, "i") } });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user: user, token: token };
};
