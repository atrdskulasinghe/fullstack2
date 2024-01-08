import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Book() {
    const { movieId, time, date, adultTicket, childrenTicket, selectedSeats } = useParams();
    const [lastMovie, setLastMovie] = useState(null);
    const [adultPrice, setAdultPrice] = useState(null);
    const [childrenPrice, setChildrenPrice] = useState(null);
    const [total, setTotal] = useState(null);
    const [userId, setUserId] = useState(null);
    const [newBook, setNewBook] = useState({ userId: "", movieId: "", time: "", date: "", seats: "", adultTicket: "", childrenTicket: "", totalAmount: "" });
    const [isDataLoaded, setIsDataLoaded] = useState(false); // Flag to check if data is loaded
    const [isDataSubmitted, setIsDataSubmitted] = useState(false); // Flag to check if data is submitted
    const loggedInUser = sessionStorage.getItem('loggedInUserEmail');

    useEffect(() => {
        if (!isDataLoaded) {
            axios.get(`http://localhost:8000/movie/${movieId}`)
                .then((res) => {
                    setLastMovie(res.data);
                    setAdultPrice(res.data.adultPrice);
                    setChildrenPrice(res.data.childrenPrice);
                    setTotal((res.data.adultPrice * adultTicket) + (res.data.childrenPrice * childrenTicket));
                    setIsDataLoaded(true); // Set flag when data is loaded
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

        if (isDataLoaded && !isDataSubmitted) {
            axios.get(`http://localhost:8000/useremail/${loggedInUser}`)
                .then((res) => {
                    if (Array.isArray(res.data) && res.data.length > 0) {
                        const firstUser = res.data[0];
                        setUserId(firstUser._id);

                        const updatedBook = {
                            userId: firstUser._id,
                            movieId: movieId,
                            time: time,
                            date: date,
                            seats: selectedSeats,
                            adultTicket: adultTicket,
                            childrenTicket: childrenTicket,
                            totalAmount: total
                        };

                        axios.post("http://localhost:8000/booking", updatedBook)
                            .then(() => {
                                setIsDataSubmitted(true);
                                window.location.href = `../../../../../../../success/${movieId}/${time}/${date}/${adultTicket}/${childrenTicket}/${selectedSeats}`;
                            })
                            .catch((error) => {
                                console.error("error", error);
                            });

                        setNewBook(updatedBook);
                    } else {
                        console.log('No user data found or invalid response structure.');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [movieId, time, date, adultTicket, childrenTicket, selectedSeats, loggedInUser, total, isDataLoaded, isDataSubmitted]);

    return (
        <div>

        </div>
    )
}
