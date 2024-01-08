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
     startDate: Date,
     endDate: Date,
     language: String,
     duration: String,
     summary: String,
     imageUrl: String,
     coverUrl: String,
     adultPrice: String,
     childrenPrice: String,
     link: String
});

const ShowTimeSchema = new Schema({
     movieId: String,
     time1: String,
     time2: String,
     time3: String,
});

const BookingSchema = new Schema({
     userId: String,
     movieId: String,
     time: String,
     date: String,
     seats: String,
     adultTicket: String,
     childrenTicket: String,
     totalAmount: String
});

const ContactSchema = new Schema({
     name: String,
     email: String,
     subject: String,
     message: String
});


const User = mongoose.model("User", UserSchema);
const Movie = mongoose.model("Movie", MovieSchema);
const ShowTime = mongoose.model("ShowTime", ShowTimeSchema);
const Booking = mongoose.model("Booking", BookingSchema);
const Contact = mongoose.model("Contact", ContactSchema);

module.exports = {
     User,
     Movie,
     ShowTime,
     Booking,
     Contact
};
