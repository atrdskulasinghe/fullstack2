import React from 'react';
import { useEffect } from 'react';
import '../components/style/seat-book.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function SeatBook() {

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

            let seat = document.querySelectorAll(".seat");

            for (let i = 0; i < seat.length; i++) {
                seat[i].addEventListener("click", () => {
                    if (i != 0) {
                        seat[i].classList.toggle("active");
                    }
                });
            }
        };

    }, []);


    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>
                <section>
                    <div className="seat-book-content">

                        <div className="content">
                            <div className="seat-book-header">
                                <div className="seat-book-header-content-1">
                                    <h2>Interstellar (English)</h2>
                                    <p>Today 22, jun 2024</p>
                                    <button className="btn">10.30AM</button>
                                </div>
                                <div className="seat-book-header-content-2">
                                    <h3>Total Amount : LKR 3000.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="seats">
                            <div className="seat-content">
                                <div className="seat-list">
                                    <button className="btn seat ">F</button>
                                    <button className="btn seat selected">1</button>
                                    <button className="btn seat">2</button>
                                    <button className="btn seat">3</button>
                                    <button className="btn seat">4</button>
                                    <button className="btn seat">5</button>
                                    <button className="btn seat">6</button>
                                    <button className="btn seat">7</button>
                                </div>
                                <div className="seat-list">
                                    <button className="btn seat">E</button>
                                    <button className="btn seat">1</button>
                                    <button className="btn seat">2</button>
                                    <button className="btn seat">3</button>
                                    <button className="btn seat">4</button>
                                    <button className="btn seat">5</button>
                                    <button className="btn seat">6</button>
                                    <button className="btn seat">7</button>
                                </div>
                                <div className="seat-list">
                                    <button className="btn seat">D</button>
                                    <button className="btn seat">1</button>
                                    <button className="btn seat">2</button>
                                    <button className="btn seat">3</button>
                                    <button className="btn seat">4</button>
                                    <button className="btn seat">5</button>
                                    <button className="btn seat">6</button>
                                    <button className="btn seat">7</button>
                                </div>
                                <div className="seat-list">
                                    <button className="btn seat">C</button>
                                    <button className="btn seat">1</button>
                                    <button className="btn seat">2</button>
                                    <button className="btn seat">3</button>
                                    <button className="btn seat">4</button>
                                    <button className="btn seat">5</button>
                                    <button className="btn seat">6</button>
                                    <button className="btn seat">7</button>
                                </div>
                                <div className="seat-list">
                                    <button className="btn seat">B</button>
                                    <button className="btn seat">1</button>
                                    <button className="btn seat">2</button>
                                    <button className="btn seat">3</button>
                                    <button className="btn seat">4</button>
                                    <button className="btn seat">5</button>
                                    <button className="btn seat">6</button>
                                    <button className="btn seat">7</button>
                                </div>
                                <div className="seat-list">
                                    <button className="btn seat">A</button>
                                    <button className="btn seat">1</button>
                                    <button className="btn seat">2</button>
                                    <button className="btn seat">3</button>
                                    <button className="btn seat">4</button>
                                    <button className="btn seat">5</button>
                                    <button className="btn seat">6</button>
                                    <button className="btn seat">7</button>
                                </div>
                                <div className="seat-screen">
                                    <div className="seat-screen-light"></div>
                                    <div className="seat-screen-display"></div>
                                    <h4>Screen</h4>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="seat-details">
                                <div className="seat-details-list">
                                    <div className="seat-details-content-1">
                                        <button className="btn"></button>
                                        <p>Selected</p>
                                    </div>
                                    <div className="seat-details-content-2">
                                        <button className="btn"></button>
                                        <p>Available</p>
                                    </div>
                                    <div className="seat-details-content-3">
                                        <button className="btn"></button>
                                        <p>Reserved</p>
                                    </div>
                                </div>
                            </div>
                            <div className="seat-ticket-details">
                                <div className="seat-ticket-details-content">
                                    <h3>0 Ticket(s) selected. Please select Category</h3>
                                    <div className="seat-ticket-details-adults">
                                        <div className="seat-ticket-adults-content-1">
                                            <h4>ADULTS</h4>
                                            <p>LKR. 2000.00</p>
                                        </div>
                                        <div className="seat-ticket-adults-content-2">
                                            <button className="btn">-</button>
                                            <h4>0</h4>
                                            <button className="btn">+</button>
                                        </div>
                                    </div>
                                    <div className="seat-ticket-details-adults">
                                        <div className="seat-ticket-adults-content-1">
                                            <h4>CHILDREN</h4>
                                            <p>LKR. 2000.00</p>
                                        </div>
                                        <div className="seat-ticket-adults-content-2">
                                            <button className="btn">-</button>
                                            <h4>0</h4>
                                            <button className="btn">+</button>
                                        </div>
                                    </div>
                                    <div className="seat-ticket-book-button">
                                        <button className="btn">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    )
}
