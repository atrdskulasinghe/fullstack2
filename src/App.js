import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import './components/style/nav.css';
import './components/style/style.css';
import './components/style/footer.css';
import './components/style/menu.css';

import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Movie from './pages/Movie.js';
import Movies from './pages/Movies.js';
import Profile from './pages/Profile.js';
import SeatBook from './pages/SeatBook.js';
import Success from './pages/Success.js';
import Dashboard from './pages/admin/Dashboard.js';
import AddMovies from './pages/admin/AddMovies.js';
import AddShowtimes from './pages/admin/AddShowtimes.js';
import AddedMovies from './pages/admin/AddedMovies.js';
import EditMovie from './pages/admin/EditMovie.js';
import AddedShowtimes from './pages/admin/AddedShowtimes.js';
import EditShowtime from './pages/admin/EditShowtime.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Corrected Route for Home */}
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/seatbook" element={<SeatBook />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add-movies" element={<AddMovies />} />
          <Route path="/admin/add-showtimes" element={<AddShowtimes />} />
          <Route path="/admin/show-movies" element={<AddedMovies />} />
          <Route path="/admin/edit-movie" element={<EditMovie />} />
          <Route path="/admin/added-showtimes" element={<AddedShowtimes />} />
          <Route path="/admin/edit-showtime" element={<EditShowtime />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
