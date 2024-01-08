import axios from "axios";
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import '../components/style/seat-book.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function SeatBook() {

    const { movieId, time, date } = useParams();
    const [lastMovie, setLastMovie] = useState(null);

    const [selectedSeats, setSelectedSeats] = useState([]);

    const [adultPrice, setAdultPrice] = useState(null);
    const [childrenPrice, setChildrenPrice] = useState(null);

    const [adultTicket, setAdultTicket] = useState(null);
    const [childrenTicket, setChildrenTicket] = useState(null);

    const [price, setPrice] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:8000/movie/${movieId}`)
            .then((res) => {
                console.log(res.data);
                setLastMovie(res.data);
                setAdultPrice(res.data.adultPrice);
                setChildrenPrice(res.data.childrenPrice);
                setPrice(res.data.adultPrice);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setAdultTicket(0);
        setChildrenTicket(0);

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





    const handleSeatClick = (seat) => {
        const updatedSeats = [...selectedSeats];
        const index = updatedSeats.indexOf(seat);

        if (index > -1) {
            updatedSeats.splice(index, 1);
        } else {
            updatedSeats.push(seat);
        }
        setSelectedSeats(updatedSeats);
        output();

        setAdultTicket(updatedSeats.length)
        console.log(adultTicket);

    };

    const output = () => {
        console.log(selectedSeats);
    }

    const handleAdultClickInc = () => {
        if (selectedSeats.length > adultTicket) {
            setAdultTicket(adultTicket + 1);
            setChildrenTicket(childrenTicket - 1);
        }
    }

    const handleChildrenClickInc = () => {
        if (selectedSeats.length > childrenTicket) {
            setAdultTicket(adultTicket - 1);
            setChildrenTicket(childrenTicket + 1);
        }
    }

    const handleAdultClickDec = () => {
        if (selectedSeats.length > childrenTicket) {
            setAdultTicket(adultTicket - 1);
            setChildrenTicket(childrenTicket + 1);
        }
    }

    const handleChildrenClickDec = () => {
        if (selectedSeats.length > adultTicket) {
            setAdultTicket(adultTicket + 1);
            setChildrenTicket(childrenTicket - 1);
        }
    }

    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>
                {lastMovie && (
                    <section>
                        <div className="seat-book-content">

                            <div className="content">
                                <div className="seat-book-header">
                                    <div className="seat-book-header-content-1">
                                        <h2>{lastMovie.movieName} ({lastMovie.language})</h2>
                                        <p>{date}</p>
                                        <button className="btn">{time}</button>
                                    </div>
                                    <div className="seat-book-header-content-2">
                                        <h3>Total Amount : LKR. {(adultTicket * adultPrice) + (childrenTicket * childrenPrice)}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="seats">
                                <div className="seat-content">
                                    <div className="seat-list">
                                        <button className="btn seat ">F</button>
                                        <button className={`btn seat ${selectedSeats.includes('F1') ? 'active' : ''}`} onClick={() => handleSeatClick('F1')}>1</button>
                                        <button className={`btn seat ${selectedSeats.includes('F2') ? 'active' : ''}`} onClick={() => handleSeatClick('F2')}>2</button>
                                        <button className={`btn seat ${selectedSeats.includes('F3') ? 'active' : ''}`} onClick={() => handleSeatClick('F3')}>3</button>
                                        <button className={`btn seat ${selectedSeats.includes('F4') ? 'active' : ''}`} onClick={() => handleSeatClick('F4')}>4</button>
                                        <button className={`btn seat ${selectedSeats.includes('F5') ? 'active' : ''}`} onClick={() => handleSeatClick('F5')}>5</button>
                                        <button className={`btn seat ${selectedSeats.includes('F6') ? 'active' : ''}`} onClick={() => handleSeatClick('F6')}>6</button>
                                        <button className={`btn seat ${selectedSeats.includes('F7') ? 'active' : ''}`} onClick={() => handleSeatClick('F7')}>7</button>
                                    </div>
                                    <div className="seat-list">
                                        <button className="btn seat">E</button>
                                        <button className={`btn seat ${selectedSeats.includes('E1') ? 'active' : ''}`} onClick={() => handleSeatClick('E1')}>1</button>
                                        <button className={`btn seat ${selectedSeats.includes('E2') ? 'active' : ''}`} onClick={() => handleSeatClick('E2')}>2</button>
                                        <button className={`btn seat ${selectedSeats.includes('E3') ? 'active' : ''}`} onClick={() => handleSeatClick('E3')}>3</button>
                                        <button className={`btn seat ${selectedSeats.includes('E4') ? 'active' : ''}`} onClick={() => handleSeatClick('E4')}>4</button>
                                        <button className={`btn seat ${selectedSeats.includes('E5') ? 'active' : ''}`} onClick={() => handleSeatClick('E5')}>5</button>
                                        <button className={`btn seat ${selectedSeats.includes('E6') ? 'active' : ''}`} onClick={() => handleSeatClick('E6')}>6</button>
                                        <button className={`btn seat ${selectedSeats.includes('E7') ? 'active' : ''}`} onClick={() => handleSeatClick('E7')}>7</button>
                                    </div>
                                    <div className="seat-list">
                                        <button className="btn seat">D</button>
                                        <button className={`btn seat ${selectedSeats.includes('D1') ? 'active' : ''}`} onClick={() => handleSeatClick('D1')}>1</button>
                                        <button className={`btn seat ${selectedSeats.includes('D2') ? 'active' : ''}`} onClick={() => handleSeatClick('D2')}>2</button>
                                        <button className={`btn seat ${selectedSeats.includes('D3') ? 'active' : ''}`} onClick={() => handleSeatClick('D3')}>3</button>
                                        <button className={`btn seat ${selectedSeats.includes('D4') ? 'active' : ''}`} onClick={() => handleSeatClick('D4')}>4</button>
                                        <button className={`btn seat ${selectedSeats.includes('D5') ? 'active' : ''}`} onClick={() => handleSeatClick('D5')}>5</button>
                                        <button className={`btn seat ${selectedSeats.includes('D6') ? 'active' : ''}`} onClick={() => handleSeatClick('D6')}>6</button>
                                        <button className={`btn seat ${selectedSeats.includes('D7') ? 'active' : ''}`} onClick={() => handleSeatClick('D7')}>7</button>
                                    </div>
                                    <div className="seat-list">
                                        <button className="btn seat">C</button>
                                        <button className={`btn seat ${selectedSeats.includes('C1') ? 'active' : ''}`} onClick={() => handleSeatClick('C1')}>1</button>
                                        <button className={`btn seat ${selectedSeats.includes('C2') ? 'active' : ''}`} onClick={() => handleSeatClick('C2')}>2</button>
                                        <button className={`btn seat ${selectedSeats.includes('C3') ? 'active' : ''}`} onClick={() => handleSeatClick('C3')}>3</button>
                                        <button className={`btn seat ${selectedSeats.includes('C4') ? 'active' : ''}`} onClick={() => handleSeatClick('C4')}>4</button>
                                        <button className={`btn seat ${selectedSeats.includes('C5') ? 'active' : ''}`} onClick={() => handleSeatClick('C5')}>5</button>
                                        <button className={`btn seat ${selectedSeats.includes('C6') ? 'active' : ''}`} onClick={() => handleSeatClick('C6')}>6</button>
                                        <button className={`btn seat ${selectedSeats.includes('C7') ? 'active' : ''}`} onClick={() => handleSeatClick('C7')}>7</button>
                                    </div>
                                    <div className="seat-list">
                                        <button className="btn seat">B</button>
                                        <button className={`btn seat ${selectedSeats.includes('B1') ? 'active' : ''}`} onClick={() => handleSeatClick('B1')}>1</button>
                                        <button className={`btn seat ${selectedSeats.includes('B2') ? 'active' : ''}`} onClick={() => handleSeatClick('B2')}>2</button>
                                        <button className={`btn seat ${selectedSeats.includes('B3') ? 'active' : ''}`} onClick={() => handleSeatClick('B3')}>3</button>
                                        <button className={`btn seat ${selectedSeats.includes('B4') ? 'active' : ''}`} onClick={() => handleSeatClick('B4')}>4</button>
                                        <button className={`btn seat ${selectedSeats.includes('B5') ? 'active' : ''}`} onClick={() => handleSeatClick('B5')}>5</button>
                                        <button className={`btn seat ${selectedSeats.includes('B6') ? 'active' : ''}`} onClick={() => handleSeatClick('B6')}>6</button>
                                        <button className={`btn seat ${selectedSeats.includes('B7') ? 'active' : ''}`} onClick={() => handleSeatClick('B7')}>7</button>
                                    </div>
                                    <div className="seat-list">
                                        <button className="btn seat">A</button>
                                        <button className={`btn seat ${selectedSeats.includes('A1') ? 'active' : ''}`} onClick={() => handleSeatClick('A1')}>1</button>
                                        <button className={`btn seat ${selectedSeats.includes('A2') ? 'active' : ''}`} onClick={() => handleSeatClick('A2')}>2</button>
                                        <button className={`btn seat ${selectedSeats.includes('A3') ? 'active' : ''}`} onClick={() => handleSeatClick('A3')}>3</button>
                                        <button className={`btn seat ${selectedSeats.includes('A4') ? 'active' : ''}`} onClick={() => handleSeatClick('A4')}>4</button>
                                        <button className={`btn seat ${selectedSeats.includes('A5') ? 'active' : ''}`} onClick={() => handleSeatClick('A5')}>5</button>
                                        <button className={`btn seat ${selectedSeats.includes('A6') ? 'active' : ''}`} onClick={() => handleSeatClick('A6')}>6</button>
                                        <button className={`btn seat ${selectedSeats.includes('A7') ? 'active' : ''}`} onClick={() => handleSeatClick('A7')}>7</button>
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
                                        <h3>{selectedSeats.length} Ticket(s) selected. Please select Category</h3>
                                        <div className="seat-ticket-details-adults">
                                            <div className="seat-ticket-adults-content-1">
                                                <h4>ADULTS</h4>
                                                <p>LKR. {lastMovie.adultPrice}</p>
                                            </div>
                                            <div className="seat-ticket-adults-content-2">
                                                <button className="btn" onClick={() => handleAdultClickDec()}>-</button>
                                                <h4>{adultTicket}</h4>
                                                <button className="btn" onClick={() => handleAdultClickInc()}>+</button>
                                            </div>
                                        </div>
                                        <div className="seat-ticket-details-adults">
                                            <div className="seat-ticket-adults-content-1">
                                                <h4>CHILDREN</h4>
                                                <p>LKR. {lastMovie.childrenPrice}</p>
                                            </div>
                                            <div className="seat-ticket-adults-content-2">
                                                <button className="btn" onClick={() => handleChildrenClickDec()}>-</button>
                                                <h4>{childrenTicket}</h4>
                                                <button className="btn" onClick={() => handleChildrenClickInc()}>+</button>
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
                )}
                <Footer></Footer>
            </div>
        </div>
    )
}
