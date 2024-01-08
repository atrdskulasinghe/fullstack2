const { User, Movie, ShowTime, Booking } = require("../model/model.js");

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
               // req.session.user = { email: email };
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

const getUserByEmail = (req, res) => {
     const email = req.params.email;
   
     User.find({ email: email })
       .then((users) => {
         if (!users || users.length === 0) {
           return res.status(404).json({ error: 'No user found for the provided email ID' });
         }
         res.json(users);
       })
       .catch((err) => {
         console.error(err); 
         res.status(500).json({ error: 'Internal server error' });
       });
   };

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

// movie

const getMovie = (req, res) => {
     Movie.find({})
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const getMovieWidthId = (req, res) => {
     const movieId = req.params.movieId;
     Movie.findById(movieId)
          .then((movie) => {
               if (!movie) {
                    return res.status(404).json({ error: 'Movie not found' });
               }
               res.json(movie);
          })
          .catch((err) => {
               res.status(500).json({ error: 'Internal server error' });
          });
}

const updateMovie = (req, res) => {
     const updateData = req.body;
     Movie.findByIdAndUpdate(req.params.userId, updateData, { new: true })
          .then((updateUser) => {
               if (!req.params.userId) {
                    res.status(400).json("user not found")
               }
               res.json(updateUser);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const deleteMovie = (req, res) => {
     Movie.findByIdAndDelete(req.params.userId)
          .then((deleteUser) => {
               if (!req.params.userId) {
                    res.status(400).json("user not found")
               }
               res.json("User deleted successfull");
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const addNewMovie = (req, res) => {
     const newUser = new Movie(req.body);
     newUser
          .save()
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

// show time

const getShowTime = (req, res) => {
     ShowTime.find({})
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}


const getShowTimesByMovieId = (req, res) => {
     const movieId = req.params.movieId;
     console.log(movieId);

     ShowTime.find({ movieId: movieId })
          .then((showtimes) => {
               if (!showtimes || showtimes.length === 0) {
                    return res.status(404).json({ error: 'No showtimes found for the movie ID' });
               }
               res.json(showtimes);
          })
          .catch((err) => {
               res.status(500).json({ error: 'Internal server error' });
          });
};



const updateShowTime = (req, res) => {
     const updateData = req.body;
     ShowTime.findByIdAndUpdate(req.params.userId, updateData, { new: true })
          .then((updateShowTime) => {
               if (!req.params.userId) {
                    res.status(400).json("user not found")
               }
               res.json(updateShowTime);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const deleteShowTime = (req, res) => {
     ShowTime.findByIdAndDelete(req.params.userId)
          .then((deleteShowTime) => {
               if (!req.params.userId) {
                    res.status(400).json("user not found")
               }
               res.json("User deleted successfull");
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const addShowTime = (req, res) => {
     const newUser = new ShowTime(req.body);
     newUser
          .save()
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}


// booking


const getBooking = (req, res) => {
     Booking.find({})
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const getBookingWidthId = (req, res) => {
     Booking.findById(req.params.UserId)
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

const addNewBooking = (req, res) => {
     const newUser = new Booking(req.body);
     newUser
          .save()
          .then((user) => {
               res.json(user);
          }).catch((err) => {
               res.status(500).send(err);
          })
}

module.exports = {
     addNewUser,
     getUser,
     getUserByEmail,
     getUserWithId,
     updateUser,
     deleteUser,

     getMovie,
     getMovieWidthId,
     addNewMovie,
     updateMovie,
     deleteMovie,

     getShowTime,
     getShowTimesByMovieId,
     addShowTime,
     updateShowTime,
     deleteShowTime,

     getBooking,
     getBookingWidthId,
     addNewBooking
}