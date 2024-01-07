const express = require("express");
const router = express.Router();

const {
     addNewUser,
     getUser,
     getUserWithId,
     updateUser,
     deleteUser,

     getMovie,
     getMovieWidthId,
     addNewMovie,
     updateMovie,
     deleteMovie,

     getShowTime,
     getShowTimeWidthId,
     addShowTime,
     updateShowTime,
     deleteShowTime,

     getBooking,
     getBookingWidthId,
     addNewBooking
} = require("../controller/controller.js");

router.route("/")
     .get(getUser)
     .post(addNewUser);

router.route("/movie")
     .get(getMovie)
     .post(addNewMovie)
     .put(updateMovie)
     .delete(deleteMovie);

router.route("/showtime")
     .get(getShowTime)
     .post(addShowTime)
     .put(updateShowTime)
     .delete(deleteShowTime);

router.route("/booking")
     .get(getBooking)
     .post(addNewBooking);

router.route("/user/:userId")
     .get(getUserWithId)
     .put(updateUser)
     .delete(deleteUser);

router.route("/movie/:movieId")
     .get(getMovieWidthId)


router.route("/booking/:bookingId")
     .get(getBookingWidthId);


router.route("/showtime/:showtimeId")
     .get(getShowTimeWidthId);

module.exports = router;