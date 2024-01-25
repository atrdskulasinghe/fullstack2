import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/adminstyle.css";
import Navbar from "./components/Navbar";

export default function AddedMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from your API endpoint
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:8000/movie");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleDelete = async (movieId) => {
    try {
      // Make API request to delete movie by ID
      const response = await axios.delete(
        `http://localhost:8000/movie/${movieId}`
      );
      console.log(response.data); // Log the response from the server

      // Update the state to remove the deleted movie
      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie._id !== movieId)
      );
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div>
      <div className="page-content">
        <Navbar />
        <div className="right-content">
          <div className="head">
            <div className="admin-menu">
              <div className="menu-btn">
                <i className="fa-solid fa-bars"></i>
              </div>
              <span className="menu-title">movies added</span>
            </div>
            <div className="profile-icon">
              <img src="\images\user-icon.png" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="added-movies">
              <div className="grid-container">
                {movies.map((movie) => (
                  <div className="movie-img" key={movie._id}>
                    <img
                      src={movie.imageUrl.replace("public", "")}
                      alt={`Movie: ${movie.movieName}`}
                    />
                    <div className="flexy-btns">
                      <a
                        href={`/admin/edit-movie/${movie._id}`}
                        className="edit-btn"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </a>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(movie._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
