import axios from "axios";
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/style/success.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Success() {

    const { movieId, time, date, adultTicket, childrenTicket, selectedSeats } = useParams();
    const [lastMovie, setLastMovie] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:8000/movie/${movieId}`)
            .then((res) => {
                console.log(res.data);
                setLastMovie(res.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

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
                        <div className="success-content">
                            <div className="success-box">
                                <div className="success-header">
                                    <h3>Thanks for Booking</h3>
                                </div>
                                <div className="success-image">
                                    <div className="success-image-background">
                                        <i className="ri-check-line"></i>
                                    </div>
                                </div>
                                <div className="success-details">
                                    <div className="success-details-content">
                                        <div className="success-details-content-1">
                                            <h3>{lastMovie.movieName} ({lastMovie.language})</h3>
                                        </div>
                                        <div className="success-details-content-2">
                                            <h3>{parseInt(adultTicket)  + parseInt(childrenTicket)}</h3>
                                        </div>
                                    </div>
                                    <div className="success-details-content">
                                        <div className="success-details-content-1">
                                            <p>ADULTS TICKETS(2)</p>
                                        </div>
                                        <div className="success-details-content-2">
                                            <p>{parseInt(adultTicket)}</p>
                                        </div>
                                    </div>
                                    <div className="success-details-content">
                                        <div className="success-details-content-1">
                                            <p>CHILDREN TICKETS(2)</p>
                                        </div>
                                        <div className="success-details-content-2">
                                            <p>{parseInt(childrenTicket)}</p>
                                        </div>
                                    </div>
                                    <div className="success-details-content">
                                        <div className="success-details-content-1">
                                            <p>SEAT NUMBERS(2)</p>
                                        </div>
                                        <div className="success-details-content-2">
                                            <p className="success-seat-number">{selectedSeats}</p>
                                        </div>
                                    </div>
                                    <div className="success-details-content">
                                        <div className="success-details-content-1">
                                            <h3>TOTAL AMOUNT</h3>
                                        </div>
                                        <div className="success-details-content-2">
                                            <h3>{(adultTicket * lastMovie.adultPrice) + (childrenTicket * lastMovie.childrenPrice)}</h3>
                                        </div>
                                    </div>
                                    <div className="success-details-content">
                                        <div className="success-details-content-1">
                                            <p>Date</p>
                                        </div>
                                        <div className="success-details-content-2">
                                        <p style={{ textAlign: 'right' }}>{date}</p>

                                        </div>
                                    </div>
                                    <div className="success-details-content">
                                        <div className="success-details-content-1">
                                            <p>TIME</p>
                                        </div>
                                        <div className="success-details-content-2">
                                            <p>{time}</p>
                                        </div>
                                    </div>
                                    <div className="success-details-button">
                                        <button className="btn" onclick="window.location.href=''">Feedback</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )}
                <Footer></Footer>
            </div>
        </div>
    )
}

