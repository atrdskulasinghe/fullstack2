const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { addNewUser,
     getUser,
     getUserWithId,
     updateUser,
     deleteUser,
     getMovie,
     getMovieWidthId,
     addNewMovie,
     getBooking,
     getBookingWidthId,
     addNewBooking, 
     updateMovie,
     deleteMovie} = require("../controller/controller.js");

router.route("/")
     .get(getUser)
     .post(addNewUser);

router.route("/movie")
     .get(getMovie)
     .post(addNewMovie);

router.route("/booking")
     .get(getBooking)
     .post(addNewBooking);

router.route("/user/:userId")
     .get(getUserWithId)
     .put(updateUser)
     .delete(deleteUser);

router.route("/movie/:movieId")
     .get(getMovieWidthId)
     .put(updateMovie)
     .delete(deleteMovie);


router.route("/booking/:bookingId")
     .get(getBookingWidthId);

module.exports = router;