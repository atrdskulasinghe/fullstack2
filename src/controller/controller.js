const User = require("../model/model.js")

const addNewUser = (req, res) => {
     const newUser = new User(req.body);

     newUser
          .save()
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const getUser = (req, res) => {
     User.find({})
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const getUserWithId = (req, res) => {
     User.findById(req.params.UserId)
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const updateUser = (req, res) => {
     const updateData = req.body;
     User.findByIdAndUpdate(req.params.userId, updateData, { new: true })
          .then((updateUser) => {
               if (!req.params.userId) {
                    res.status(400).json("user not found")
               }
               res.json(updateUser);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const deleteUser = (req, res) => {
     User.findByIdAndDelete(req.params.userId)
          .then((deleteUser) => {
               if (!req.params.userId) {
                    res.status(400).json("user not found")
               }
               res.json("User deleted successfull");
          }).catch((err) => {
               res.status(500).send(err);
          })
}

module.exports = {
     addNewUser,
     getUser,
     getUserWithId,
     updateUser,
     deleteUser
}