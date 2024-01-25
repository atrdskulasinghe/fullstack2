import React from "react";
import "./css/adminstyle.css";
import Navbar from "./components/Navbar";

export default function AddShowtimes() {
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
              <span className="menu-title">add showtimes</span>
            </div>
            <div className="profile-icon">
              <img src="\images\user-icon.png" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="right-page">
              <div className="input-row">
                <label>select movie :</label>
                <select value="" className="input-field">
                  <option value="">Select a Movie</option>
                </select>
              </div>
              <div className="input-row">
                <label>date :</label>
                <input type="date" className="input-field" />
              </div>
              <div className="input-row">
                <label>showtime :</label>
                <input type="time" className="input-field" />
              </div>
              <div className="crud-buttons">
                <button className="insert">Insert</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
