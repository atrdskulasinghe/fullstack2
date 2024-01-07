import React from "react";

export default function Navbar() {
  return (
      <div className="navbar">
        <div className="head">
          <div className="logo-name">Ticket Book</div>
        </div>
        <div className="admin-info">
          <div className="admin-img">
            <img src="../img/user-icon.png" />
          </div>
          <span className="admin-name">Admin's Name</span>
        </div>
        <div className="nav-menu">
          <a href="/admin/dashboard">dashboard</a>
          <a href="/admin/add-movies">add movies</a>
          <a href="/admin/add-showtimes">add showtimes</a>
          <a href="/admin/dashboard">order history</a>
          <a href="/admin/dashboard">feedback</a>
        </div>
        <div className="logout">
          <a href="" className="logout-btn">
            logout
          </a>
        </div>
      </div>
  );
};
