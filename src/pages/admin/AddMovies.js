import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/adminstyle.css";
import Navbar from "./components/Navbar";

export default function AddMovies() {
  const [movieData, setMovieData] = useState({
    movieName: "",
    language: "",
    duration: "",
    startDate: "",
    endDate: "",
    summary: "",
    imageUrl: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "movieName",
      "language",
      "duration",
      "startDate",
      "endDate",
      "summary",
    ];

    for (const field of requiredFields) {
      if (!movieData[field]) {
        setError(`Please fill in the ${field} field.`);
        return false;
      }
    }

    setError("");
    return true;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    console.log(file);

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setMovieData((prevData) => ({
        ...prevData,
        imageUrl: imageURL,
        file: file,
      }));
    }
  };

  useEffect(() => {
    console.log("Movie Data Before API Request:", movieData);
  }, [movieData.imageUrl]);

  const handleAddMovie = async () => {
    if (!validateForm()) {
      return;
    }

    console.log("Movie Data After File Change:", movieData);

    // Check if a file is selected
    if (!movieData.file) {
      setError("Please select an image.");
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append("file", movieData.file);

      // Make API request to upload image
      const uploadResponse = await axios.post(
        "http://localhost:8000/upload",
        formdata
      );

      console.log("Upload Response:", uploadResponse);
      // Get the filename from the upload response
      const { filename, filePath } = uploadResponse.data;

      console.log("Filename:", filename);
      console.log("Filepath:", filePath);

      const updatedImageUrl = filename;

      setMovieData((prevData) => ({
        ...prevData,
        imageUrl: updatedImageUrl,
      }));

      // Make API request to add a new movie
      const response = await axios.post(
        "http://localhost:8000/movie",
        {
          ...movieData,
          imageUrl: updatedImageUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error("Error adding movie:", error);
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
              <span className="menu-title">add movies</span>
            </div>
            <div className="profile-icon">
              <img src="\images\user-icon.png" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="right-page">
              <div className="movie-img" id="imagePreview">
                {movieData.imageUrl && (
                  <img src={movieData.imageUrl} alt="Movie Preview" />
                )}
              </div>
              <div className="image-upload-container">
                <label for="imageInput" className="custom-file-upload">
                  Import
                </label>
                <input
                  id="imageInput"
                  type="file"
                  name="imageUrl"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <div className="input-row">
                <label>movie title :</label>
                <input
                  type="text"
                  className="input-field"
                  name="movieName"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>language :</label>
                <input
                  type="text"
                  className="input-field"
                  name="language"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>duration :</label>
                <input
                  type="text"
                  className="input-field"
                  name="duration"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>start date :</label>
                <input
                  type="date"
                  className="input-field"
                  name="startDate"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>end date :</label>
                <input
                  type="date"
                  className="input-field"
                  name="endDate"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-row">
                <label>summary :</label>
                <textarea
                  className="input-field"
                  name="summary"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="crud-buttons">
                <button
                  type="submit"
                  className="insert"
                  onClick={handleAddMovie}
                >
                  Add Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
