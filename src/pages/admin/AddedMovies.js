import React from "react";
import "./css/adminstyle.css";
import Navbar from "./components/Navbar";

export default function AddedMovies() {
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
              <img src="../img/user-icon.png" alt="" />
            </div>
          </div>
          <div className="right-page-background">
            <div className="added-movies">
              <div className="grid-container">
                <div className="movie-img" id="imagePreview">
                  <img src="" />
                  <div className="flexy-btns">
                    <a href="/admin/edit-movie" className="edit-btn">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <button className="delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-img" id="imagePreview">
                  <img src="" />
                  <div className="flexy-btns">
                    <a href="" className="edit-btn">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <button className="delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-img" id="imagePreview">
                  <img src="" />
                  <div className="flexy-btns">
                    <a href="" className="edit-btn">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <button className="delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-img" id="imagePreview">
                  <img src="" />
                  <div className="flexy-btns">
                    <a href="" className="edit-btn">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <button className="delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-img" id="imagePreview">
                  <img src="" />
                  <div className="flexy-btns">
                    <a href="" className="edit-btn">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <button className="delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-img" id="imagePreview">
                  <img src="" />
                  <div className="flexy-btns">
                    <a href="" className="edit-btn">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <button className="delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="movie-img" id="imagePreview">
                  <img src="" />
                  <div className="flexy-btns">
                    <a href="" className="edit-btn">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                    <button className="delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
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
