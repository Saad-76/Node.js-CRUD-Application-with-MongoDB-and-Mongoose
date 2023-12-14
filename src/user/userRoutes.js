const express = require("express");
const {
  registerUser,
  signInUser,
  updateUser,
  deleteUser,
} = require("./userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", signInUser);
router.put("/user", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;
