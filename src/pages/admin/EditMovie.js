import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/adminstyle.css";
import Navbar from "./components/Navbar";

export default function EditMovie() {
  const { id } = useParams();

  const [movieData, setMovieData] = useState({
    movieName: "",
    language: "",
    duration: "",
    synopsis: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/movie/${id}`);
        const movie = response.data;

        setMovieData({
          movieName: movie.movieName,
          language: movie.language,
          duration: movie.duration,
          summary: movie.summary,
          imageUrl: movie.imageUrl,
        });
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateMovie = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/movie/${id}`,
        movieData
      );

      console.log("Update Response:", response.data);
      // Handle the response as needed

      // Redirect or perform any other actions after successful update
    } catch (error) {
      console.error("Error updating movie:", error);
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
              <span className="menu-title">edit movie</span>
            </div>
            <div className="profile-icon">
              <img src="\images\user-icon.png" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="right-page">
              <div className="movie-img" id="imagePreview">
                {movieData.imageUrl && (
                  <img
                    src={movieData.imageUrl.replace("public", "")}
                    alt="Movie Preview"
                  />
                )}
              </div>
              <div className="image-upload-container">
                <label
                  for="imageInput"
                  className="custom-file-upload"
                  onChange={handleInputChange}
                  name="imageUrl"
                >
                  new import
                </label>
                <input id="imageInput" type="file" accept="image/*" />
              </div>
              <div className="input-row">
                <label>movie title :</label>
                <input
                  type="text"
                  className="input-field"
                  onChange={handleInputChange}
                  value={movieData.movieName}
                  name="movieName"
                />
              </div>
              <div className="input-row">
                <label>language :</label>
                <input
                  type="text"
                  className="input-field"
                  onChange={handleInputChange}
                  value={movieData.language}
                  name="language"
                />
              </div>
              <div className="input-row">
                <label>duration :</label>
                <input
                  type="text"
                  className="input-field"
                  onChange={handleInputChange}
                  value={movieData.duration}
                  name="duration"
                />
              </div>
              <div className="input-row">
                <label>synopsis :</label>
                <textarea
                  className="input-field"
                  onChange={handleInputChange}
                  value={movieData.summary}
                  name="summary"
                />
              </div>
              <div className="crud-buttons">
                <button className="insert" onClick={handleUpdateMovie}>
                  Update Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
