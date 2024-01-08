import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate,useNavigate  } from 'react-router-dom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('loggedInUserEmail');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
      sessionStorage.removeItem('loggedInUserEmail');
      setIsLoggedIn(false);
      window.location.href="/"
    };

    handleLogout();

    return null;
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Corrected Route for Home */}
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="../" />} />
          <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="../" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie" element={isLoggedIn ? <Movie /> : <Navigate to="/login" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/seatbook" element={<Movies />} />
          <Route path="/success" element={<Success />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/seatbook/:movieId/:time/:date" element={<SeatBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
