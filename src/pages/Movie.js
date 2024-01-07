import React from 'react';
import { useEffect } from 'react';
import '../components/style/movie.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

import imageCover from '../images/movie/cover/1.jpg';

export default function Movie() {
    useEffect(() => {
        const handleMenuToggle = () => {
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
        };

        handleMenuToggle();
    }, []);
    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>
                <section>
                    <div className="movie-header">
                        <div className="movie-header-background">
                            <img src={imageCover} alt="" />
                        </div>
                        <div className="content">
                            <div className="movie-content">
                                <div className="movie-content-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div className="movie-content-details">
                                    <h3>Interstellar (English)</h3>
                                    <ul>
                                        <li>
                                            <i className="ri-calendar-2-line"></i>
                                            16, Dec 2023
                                        </li>
                                        <li>
                                            <i className="ri-time-line"></i>
                                            3hrs 12mins
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="movie-date-select">
                        <div className="content">
                            <div className="movie-date-select-list">
                                <button className="btn">
                                    <p>2024/10/20</p>
                                    <p>Fri</p>
                                </button>
                                <button className="btn">
                                    <p>2024/10/20</p>
                                    <p>Fri</p>
                                </button>
                                <button className="btn">
                                    <p>2024/10/20</p>
                                    <p>Fri</p>
                                </button>
                                <button className="btn">
                                    <p>2024/10/20</p>
                                    <p>Fri</p>
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="movie-time-select">
                        <div className="content">
                            <div className="movie-time-select-list">
                                <button className="btn">
                                    <p>08.30AM</p>
                                </button>
                                <button className="btn">
                                    <p>09.30AM</p>
                                </button>
                                <button className="btn">
                                    <p>10.30AM</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="movie-summery">
                        <div className="content">
                            <h3>Summery</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro est possimus
                                consectetur. Consequuntur iure necessitatibus corrupti, obcaecati eveniet itaque ipsa culpa fuga
                                molestias dicta! Consequatur facere obcaecati eum minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro est possimus
                                consectetur. Consequuntur iure necessitatibus corrupti, obcaecati eveniet itaque ipsa culpa fuga
                                molestias dicta! Consequatur facere obcaecati eum minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro est possimus
                                consectetur. Consequuntur iure necessitatibus corrupti, obcaecati eveniet itaque ipsa culpa fuga
                                molestias dicta! Consequatur facere obcaecati eum minima.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    )
}

