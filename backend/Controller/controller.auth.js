import * as userService from "../Services/service.auth.js";

export const register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ id: user._id, username: user.username, email: user.email });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { user, token } = await userService.loginUser(req.body);
    res.json({ token, id: user._id, username: user.username, email: user.email });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
