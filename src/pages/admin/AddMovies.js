import React, { useState } from "react";
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


  const handleAddMovie = async () => {
    if (!validateForm()) {
      return;
    }
  
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
      const filename = uploadResponse.data.filename;

      console.log("Filename:", filename);
  
      // Now that the image is uploaded, proceed to add the movie
      const formData = new FormData();
      formData.append("movieName", movieData.movieName);
      formData.append("language", movieData.language);
      formData.append("duration", movieData.duration);
      formData.append("startDate", movieData.startDate);
      formData.append("endDate", movieData.endDate);
      formData.append("summary", movieData.summary);
      formData.append("imageUrl", filename); // Use the filename as imageUrl
  
      // Make API request to add a new movie
      const response = await axios.post(
        "http://localhost:8000/movie",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
              <img src="../img/user-icon.png" alt="" />
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

