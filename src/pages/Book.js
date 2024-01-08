import axios from "axios";
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Book() {

    const { movieId, time, date, adultTicket, childrenTicket, selectedSeats } = useParams();
    const [lastMovie, setLastMovie] = useState(null);

    const [adultPrice, setAdultPrice] = useState(null);
    const [childrenPrice, setChildrenPrice] = useState(null);
    const [total, setTotal] = useState(null);
    const [userId, setUserId] = useState(null);

    const [newBook, setNewBook] = useState({ userId: "", movieId: "", time: "", date: "", seats: "", adultTicket: "", childrenTicket: "", totalAmount: "" });
    const loggedInUser = sessionStorage.getItem('loggedInUserEmail');

    useEffect(() => {

        axios.get(`http://localhost:8000/movie/${movieId}`)
            .then((res) => {
                // console.log(res.data);
                setLastMovie(res.data);
                setAdultPrice(res.data.adultPrice);
                setChildrenPrice(res.data.childrenPrice);
                setTotal((res.data.adultPrice * adultTicket) + (res.data.childrenPrice * childrenTicket))
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        console.log(loggedInUser);

        axios.get(`http://localhost:8000/useremail/${loggedInUser}`)
            .then((res) => {
                console.log(res.data);
                if (Array.isArray(res.data) && res.data.length > 0) {
                    const firstUser = res.data[0];
                    console.log(firstUser._id);
                    setUserId(firstUser._id);

                    setNewBook({ ...newBook, userId: userId });
                    setNewBook({ ...newBook, movieId: movieId });
                    setNewBook({ ...newBook, time: time });
                    setNewBook({ ...newBook, date: date });
                    setNewBook({ ...newBook, seats: selectedSeats });
                    setNewBook({ ...newBook, adultTicket: adultTicket });
                    setNewBook({ ...newBook, childrenTicket: childrenTicket });
                    setNewBook({ ...newBook, totalAmount: total });
                    
                } else {
                    console.log('No user data found or invalid response structure.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });



        axios
            .post("http://localhost:8000/booking", newBook)
            .then(() => {
                // setNewUser({ FirstName: "", LastName: "", Email: "", PhoneNumber: "", Password: "", ConfirmPassword: "" });
            })
            .catch((error) => {
                console.error("error", error);
            });

    }, []);


    return (
        <div>

        </div>
    )
}
