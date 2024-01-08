import axios from "axios";
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';


import '../components/style/movie.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

import imageCover from '../images/movie/cover/1.jpg';

export default function Movie() {

    const { movieId } = useParams();
    const [lastMovie, setLastMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const [showTimes1, setShowTimes1] = useState([]);
    const [showTimes2, setShowTimes2] = useState([]);
    const [showTimes3, setShowTimes3] = useState([]);

    const [clickDate, setClickDate] = useState("");
    const [clickTime, setClickTime] = useState("");

    useEffect(() => {

        console.log(movieId);

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


            // 




            axios.get(`http://localhost:8000/movie/${movieId}`)
                .then((res) => {
                    console.log(res.data);
                    setLastMovie(res.data);

                    const startDate = new Date(res.data.startDate);
                    const endDate = new Date(res.data.endDate);
                    const today = new Date();

                    const threeDaysAhead = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);

                    const tomorrow = new Date(today);
                    tomorrow.setDate(tomorrow.getDate() + 1);

                    const isEndDateNotToday = endDate.getDate() !== today.getDate();
                    const isEndDateNotTomorrow = endDate.getDate() !== tomorrow.getDate();
                    const isStartDateWithin3Days = startDate.getTime() <= threeDaysAhead.getTime();

                    if (isEndDateNotToday && isEndDateNotTomorrow && isStartDateWithin3Days) {
                        setMovies([{ date: today }, { date: tomorrow }, { date: new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000) }]);
                    } else {
                        setMovies([]);
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                });



            axios.get(`http://localhost:8000/showtime/${movieId}`)
                .then((res) => {
                    console.log(res.data);
                    const [showtimeData] = res.data;
                    setShowTimes1(showtimeData.time1 ? [showtimeData.time1] : []);
                    setShowTimes2(showtimeData.time2 ? [showtimeData.time2] : []);
                    setShowTimes3(showtimeData.time3 ? [showtimeData.time3] : []);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });


            let allButttons = document.querySelectorAll(".movie-date-select-list button");

            for (let i = 0; i < allButttons.length; i++) {
                allButttons[i].addEventListener("click", () => {
                    for (let a = 0; a < allButttons.length; a++) {
                        allButttons[a].classList.remove("active");
                    }
                    allButttons[i].classList.toggle("active");
                });
            }

            let allTimeButttons = document.querySelectorAll(".movie-time-select-list button");

            for (let i = 0; i < allTimeButttons.length; i++) {
                allTimeButttons[i].addEventListener("click", () => {
                    for (let a = 0; a < allTimeButttons.length; a++) {
                        allTimeButttons[a].classList.remove("active");
                    }
                    allTimeButttons[i].classList.toggle("active");
                });
            }

        };

    }, []);

    const handleDateClick = (dateString) => {
        console.log("Clicked date:", dateString);
        setClickDate(dateString);
        if (clickTime) {
            window.location.href = `../seatbook/${movieId}/${clickTime}/${dateString}`;
        }
    };

    const handleTimeClick = (time) => {
        console.log("Clicked time:", time);
        setClickTime(time);
        if (clickDate) {
            window.location.href = `../seatbook/${movieId}/${time}/${clickDate}`;
        }
    };


    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>
                {lastMovie && (
                    <section>
                        <div className="movie-header">
                            <div className="movie-header-background">
                                <img src={require("../images/movie/cover/" + lastMovie.coverUrl + "")} alt="Footer Background" />
                            </div>
                            <div className="content">
                                <div className="movie-content">
                                    <div className="movie-content-image">
                                        <img src={require("../images/movie/" + lastMovie.imageUrl + "")} alt="Footer Background" />
                                    </div>
                                    <div className="movie-content-details">
                                        <h3>{lastMovie.movieName} ({lastMovie.language})</h3>
                                        <ul>
                                            <li>
                                                <i className="ri-calendar-2-line"></i>
                                                {lastMovie.startDate}
                                            </li>
                                            <li>
                                                <i className="ri-time-line"></i>
                                                {lastMovie.duration}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="movie-date-select">
                            <div className="content">
                                <div className="movie-date-select-list">
                                    {movies.map((movie, index) => (
                                        <button className="btn" key={index} onClick={() => handleDateClick(new Date(movie.date).toDateString())}>
                                            <p>{new Date(movie.date).toDateString()}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="movie-time-select">
                            <div className="content">
                                <div className="movie-time-select-list">
                                    {/* {showTimes1.map((time, index) => (
                                        <button className="btn" key={`showTime1-${index}`} onClick={setClickTime(time)}>
                                            <p>{time}</p>
                                        </button>
                                    ))} */}
                                    {/* {showTimes2.map((time, index) => (
                                        <button className="btn" key={`showTime2-${index}`} onClick={setClickTime(time)}>
                                            <p>{time}</p>
                                        </button>
                                    ))} */}
                                    {showTimes1.map((time, index) => (
                                        <button className="btn" key={`showTime1-${index}`} onClick={() => handleTimeClick(time)}>
                                            <p>{time}</p>
                                        </button>
                                    ))}

                                    {showTimes2.map((time, index) => (
                                        <button className="btn" key={`showTime2-${index}`} onClick={() => handleTimeClick(time)}>
                                            <p>{time}</p>
                                        </button>
                                    ))}

                                    {/* {showTimes3.map((time, index) => (
                                        <button className="btn" key={`showTime3-${index}`} onClick={setClickTime(time)}>
                                            <p>{time}</p>
                                        </button>
                                    ))} */}

                                    {showTimes3.map((time, index) => (
                                        <button className="btn" key={`showTime3-${index}`} onClick={() => handleTimeClick(time)}>
                                            <p>{time}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="movie-summery">
                            <div className="content">
                                <h3>Summery</h3>
                                <p>
                                    {lastMovie.summary}
                                </p>
                            </div>
                        </div>

                    </section>
                )}
                <Footer></Footer>
            </div>
        </div>
    )
}

