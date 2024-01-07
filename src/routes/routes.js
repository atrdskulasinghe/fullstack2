const express = require("express");
const router = express.Router();

const { addNewUser, getUser, getUserWithId, updateUser, deleteUser } = require("../controller/controller.js");

router.route("/")
     .get(getUser)
     .post(addNewUser);

router.route("/user/:userId")
     .get(getUserWithId)
     .put(updateUser)
     .delete(deleteUser);

module.exports = router;