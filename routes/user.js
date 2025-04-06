const express = require("express");
const {
  getUserById,
  getAllUsers,
  createUser,
  getSSRusers,
  updateUser,
  deleteUser,
} = require("../controllers/users");
// now instead of using app.get we will use router.get
const router = express.Router();

// CSR (client side rendering !!)
router.route("/").get(getAllUsers).post(createUser);
//below /ssr means the actual path will be /users/ssr !!
router.get("/ssr", getSSRusers);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
