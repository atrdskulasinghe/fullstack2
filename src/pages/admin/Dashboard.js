import React from "react";
import './css/adminstyle.css'
import Navbar from './components/Navbar';

export default function Dashboard() {
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
              <span className="menu-title">dashboard</span>
            </div>
            <div className="profile-icon">
              <img src="./img/user-icon.png" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="right-page">
              <div className="left-column">
                <a href="/admin/show-movies" className="nav-card">
                  <div className="icon">
                    <i className="fa-solid fa-ticket"></i>
                  </div>
                  <div className="nav-name">added movies</div>
                </a>
                <a href="/admin/added-showtimes" className="nav-card">
                  <div className="icon">
                    <i className="fa-solid fa-check-to-slot"></i>
                  </div>
                  <div className="nav-name">added showtimes</div>
                </a>
                <a className="nav-card">
                  <div className="icon">
                    <i className="fa-solid fa-film"></i>
                  </div>
                  <div className="nav-name">order history</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
