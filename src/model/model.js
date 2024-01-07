const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
     firstName: String,
     lastName: String,
     email: String,
     phoneNumber: String,
     password: String,
     confirmPassword: String
});

const User = mongoose.model("userData", UserSchema);

module.exports = User;