import axios from "axios";
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/style/about.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [lastMovie, setLastMovie] = useState(null);
    
    useEffect(() => {

        return () => {
            const menuIcon = document.querySelector(".menu-icon");
            const menu = document.querySelector(".menu");
            const menuClose = document.querySelector(".menu-close");

            if (menuIcon && menu && menuClose) {
                menuIcon.addEventListener("click", () => {
                    menuIcon.classList.toggle("active");
                    menu.classList.toggle("active");
                });

                menuClose.addEventListener("click", () => {
                    menuIcon.classList.toggle("active");
                    menu.classList.toggle("active");
                });
            }

            axios.get('http://localhost:8000/movie')
                .then((res) => {
                    setMovies(res.data);
                    if (res.data.length > 0) {
                        const lastMovieDetails = res.data[res.data.length - 1]; 
                        setLastMovie(lastMovieDetails); 
                        console.log(lastMovieDetails);
                    }
                    // console.log(res.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };

    }, []);

    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>
                {lastMovie && (
                <section>
                    <div className="content">
                        <div className="home-search">
                            <div className="home-search-select">
                                <select name="" id="">
                                    <option value="" className="option">By Movie Name</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="home-search-input">
                                <input type="text" placeholder="Search for Movie and Event" />
                            </div>
                            <div className="home-search-button">
                                <button className="btn">Search</button>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="home-mobile-search">
                            <div className="home-mobile-search-select">
                                <select name="" id="">
                                    <option value="" className="option">By Movie Name</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="home-mobile-search-input">
                                <input type="text" placeholder="Search for Movie and Event" />
                            </div>
                            <div className="home-mobile-search-button">
                                <button className="btn"><i className="ri-search-line"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="movie-list">
                            {/* <div className="movie-card">
                                <div className="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div className="movie-title">
                                    <h3>{lastMovie.movieName} ({lastMovie.language})</h3>
                                </div>
                                <div className="movie-button">
                                    <a href="" className="btn">Buy Ticket</a>
                                </div>
                            </div> */}
                             {movies.map((movie, index) => (
                                <div className="movie-card" key={index}>
                                    <div className="movie-image">
                                        <img src={require("../images/movie/" + movie.imageUrl + "")} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h3>{movie.movieName} ({movie.language})</h3>
                                    </div>
                                    <div className="movie-button">
                                        {/* <a href="#" className="btn">Buy Ticket</a>  */}
                                        <Link to={`../movie/${movie._id}`}>Buy Ticket</Link>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="movie-card">
                                <div className="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div className="movie-title">
                                    <h3>Kung Fu Panda 4 (English)</h3>
                                </div>
                                <div className="movie-button">
                                    <a href="" className="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div className="movie-card">
                                <div className="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div className="movie-title">
                                    <h3>Avatar 3 (English)</h3>
                                </div>
                                <div className="movie-button">
                                    <a href="" className="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div className="movie-card">
                                <div className="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div className="movie-title">
                                    <h3>ARQ (English)</h3>
                                </div>
                                <div className="movie-button">
                                    <a href="" className="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div className="movie-card">
                                <div className="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div className="movie-title">
                                    <h3>Interstellar (English)</h3>
                                </div>
                                <div className="movie-button">
                                    <a href="" className="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div className="movie-card">
                                <div className="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div className="movie-title">
                                    <h3>Interstellar (English)</h3>
                                </div>
                                <div className="movie-button">
                                    <a href="" className="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div className="movie-card">
                                <div className="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div className="movie-title">
                                    <h3>Interstellar (English)</h3>
                                </div>
                                <div className="movie-button">
                                    <a href="" className="btn">Buy Ticket</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                )}
                <Footer></Footer>
            </div>
        </div>
    )
}


