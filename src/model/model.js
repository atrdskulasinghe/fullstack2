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

const MovieSchema = new Schema({
     movieName: String,
     startDate: {
          type: Date,
          default: Date.now
     },
     endDate: {
          type: Date,
          default: Date.now
     },
     language: String,
     duration: String,
     summary: String,
     imageUrl: String,
     coverUrl: String,
     link: String
});


const BookingSchema = new Schema({
     userId: String,
     movieId: String,
     time: String,
     date: String,
     seats: String,
     adultTicket: String,
     childrenTicket: String,
     totalAmount: String,
     method: String
});

const User = mongoose.model("User", UserSchema);
const Movie = mongoose.model("Movie", MovieSchema);
const Booking = mongoose.model("Booking", BookingSchema);

module.exports = {
     User,
     Movie,
     Booking
};
