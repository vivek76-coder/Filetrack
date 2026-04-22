const UserModel = require("../model/user.model.js");

const signup = async (req, res) => {
  try {
    await UserModel.create(req.body);
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = (req, res) => {
  try {
    res.send("sucess");
  } catch (err) {
    res.status(200).json({ message: err.message });
  }
};
module.exports = {
  signup,
  login
};
