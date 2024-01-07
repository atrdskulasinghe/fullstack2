import React from "react";
import './css/adminstyle.css'
import Navbar from './components/Navbar';

export default function EditMovie() {
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
              <img src="../img/user-icon.png" alt="" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="right-page">
              <div className="movie-img" id="imagePreview"></div>
              <div className="image-upload-container">
                <label for="imageInput" className="custom-file-upload">
                  new import
                </label>
                <input id="imageInput" type="file" accept="image/*" />
              </div>
              <div className="input-row">
                <label>movie title :</label>
                <input type="text" className="input-field" />
              </div>
              <div className="input-row">
                <label>language :</label>
                <input type="text" className="input-field" />
              </div>
              <div className="input-row">
                <label>duration :</label>
                <input type="text" className="input-field" />
              </div>
              <div className="input-row">
                <label>synopsis :</label>
                <textarea className="input-field" name="synopsis" />
              </div>
              <div className="crud-buttons">
                <button className="insert">Update Movie</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
