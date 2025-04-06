const User = require("../models/user");

async function getUserById(req, res) {
  const userId = req.params.id;
  const allDbUsers = await User.findById(userId);
  if (!allDbUsers) {
    return res.status(404).json({ message: "User not found" });
  }
  const selectedUser = allDbUsers?.find((user) => user._id === userId);
  return res.status(200).json({ user: selectedUser });
}

async function getAllUsers(req, res) {
    console.log("getAllUsers called",req.body)
  const allDbUsers = await User.find({});
  return res.status(200).json({ users: allDbUsers });
}

async function createUser(req, res) {
  const userData = req.body;
  if (
    !userData ||
    !userData.first_name ||
    !userData.last_name ||
    !userData.gender ||
    !userData.email
  ) {
    {
      return res.status(400).json({ msg: " All fields are required !!" });
    }
  }

  await User.create(userData)
    .then((res) => {
      return res
        .status(201)
        .json({ msg: "User created successfully !!", id: res._id });
    })
    .catch((err) => {
      return res.status(500).json({ msg: err.message });
    });
}

async function getSSRusers(req, res) {
  const allDbUsers = await User.find({});
  return res.status(200).json({ users: allDbUsers });
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const userData = req.body;
  const response = await User.findByIdAndUpdate(userId, userData);
  return res
    .status(200)
    .json({ message: "User updated successfully !!!!", user: response });
}

async function deleteUser(req, res) {
  const userId = req.params.id;
  const response = await User.findByIdAndDelete(userId);
  return res
    .status(200)
    .json({ message: "User deleted successfully !!!!", user: response });
}

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  getSSRusers,
  deleteUser,
};
