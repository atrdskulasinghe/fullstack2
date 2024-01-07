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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
