import React from "react";
import "./css/adminstyle.css";
import Navbar from "./components/Navbar";

export default function AddedShowtimes() {
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
              <span className="menu-title">showtimes added</span>
            </div>
            <div className="profile-icon">
              <img src="\images\user-icon.png" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="added-showtimes">
              <div className="showtime-container">
                <div className="showtime-card">
                  <div className="movie-name">Interstellar (English)</div>
                  <div className="movie-date">
                    08 Jan 2024
                    <div className="times">
                      <a href="/admin/edit-showtime" className="movie-showtime">
                        08:00AM
                      </a>
                      <a className="movie-showtime">10:30AM</a>
                    </div>
                  </div>
                  <div className="movie-date">
                    08 Jan 2024
                    <div className="times">
                      <a className="movie-showtime">08:00AM</a>
                      <a className="movie-showtime">10:30AM</a>
                    </div>
                  </div>
                </div>
                <div className="showtime-card">
                  <div className="movie-name">Kung Fu Panda 4 (English)</div>
                  <div className="movie-date">
                    08 Jan 2024
                    <div className="times">
                      <a className="movie-showtime">08:00AM</a>
                      <a className="movie-showtime">10:30AM</a>
                      <a className="movie-showtime">04:30PM</a>
                    </div>
                  </div>
                </div>
                <div className="showtime-card">
                  <div className="movie-name">Another (English)</div>
                  <div className="movie-date">
                    08 Jan 2024
                    <div className="times">
                      <a className="movie-showtime">08:00AM</a>
                      <a className="movie-showtime">10:30AM</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
