import axios from "axios";
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../components/style/contact.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

import background from '../images/ui/background-3.jpg';

export default function Contact() {

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [newUser, setNewUser] = useState({ name: "", email: "", subject: "", message: "" });

    const [showInvalidMessage, setShowInvalidMessage] = useState(false);


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
        };

    }, []);

    const addNewUser = () => {

        setNameError("");
        setEmailError("");
        setSubjectError("");
        setMessageError("");

        if (newUser.name === "" || newUser.name === undefined || newUser.name === null) {
            setNameError("Please Enter your name");
        }

        if (newUser.email === "" || newUser.email === undefined || newUser.email === null) {
            setEmailError("Please Enter your email");
        }

        if (newUser.subject === "" || newUser.subject === undefined || newUser.subject === null) {
            setSubjectError("Please Enter subject");
        }

        if (newUser.message === "" || newUser.message === undefined || newUser.message === null) {
            setMessageError("Please Enter your message");
        }


        if (newUser.name === "" || newUser.name === undefined || newUser.name === null) {
        } else if (newUser.email === "" || newUser.email === undefined || newUser.email === null) {
        } else if (newUser.subject === "" || newUser.subject === undefined || newUser.subject === null) {
        } else if (newUser.message === "" || newUser.message === undefined || newUser.message === null) {
        } else {

            axios
                .post("http://localhost:8000/contact", newUser)
                .then(() => {
                    setNewUser({ name: "", email: "", subject: "", message: "" });
                    setShowInvalidMessage(true);
                    // window.location.href = "../login";
                })
                .catch((error) => {
                    console.error("error", error);
                });

            setNameError("");
            setEmailError("");
            setSubjectError("");
            setMessageError("");
        }

    };

    const setName = (e) => {
        setNewUser({ ...newUser, name: e.target.value });
    };

    const setEmail = (e) => {
        setNewUser({ ...newUser, email: e.target.value });
    };

    const setSubject = (e) => {
        setNewUser({ ...newUser, subject: e.target.value });
    };

    const setMessage = (e) => {
        setNewUser({ ...newUser, message: e.target.value });
    };

    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>
                <section>
                    <div className="contact-header">
                        <img src={background} alt="" />
                        <div className="contact-header-text">
                            <div>
                                <h1>Contact</h1>
                                <div className="contact-header-url">
                                    <ul>
                                        <li>
                                            <a href="">Home</a>
                                        </li>
                                        <li>/</li>
                                        <li>
                                            <a href="">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="contact-content">
                            <div className="contact-content-1">
                                {showInvalidMessage && (
                                    <div className="contact-success">
                                        <p>Your message send successfull</p>
                                    </div>
                                )}
                                <h1>Contact Us</h1>
                                <div className="input-group-1">
                                    <div className="input-group-content-1">
                                        <h2>Your name</h2>
                                        <input type="text" value={newUser.name} onChange={setName} />
                                        <p className="signup-input-error">{nameError}</p>
                                    </div>
                                    <div className="input-group-content-2">
                                        <h2>Your email</h2>
                                        <input type="text" value={newUser.email} onChange={setEmail} />
                                        <p className="signup-input-error">{emailError}</p>
                                    </div>
                                </div>

                                <div className="input-group-2">
                                    <h2>Subject</h2>
                                    <input type="text" value={newUser.subject} onChange={setSubject} />
                                    <p className="signup-input-error">{subjectError}</p>
                                </div>
                                <div className="input-group-2">
                                    <h2>Your message</h2>
                                    <textarea type="text" value={newUser.message} onChange={setMessage}></textarea>
                                    <p className="signup-input-error">{messageError}</p>
                                </div>
                                <div className="contact-content-1-button">
                                    <button onClick={addNewUser}>Submit</button>
                                </div>
                            </div>
                            <div className="contact-content-2">
                                <h1 style={{ marginTop: '20px' }}>Info Location</h1>
                                <div className="location-content-info">
                                    <div className="location-content">
                                        <div className="location-content-icon">
                                            <i className="ri-home-4-fill"></i>
                                        </div>
                                        <p>
                                            2/14 Majestic City 10 <br /> Station Road, 04 <br /> Colombo
                                        </p>
                                    </div>
                                    <div className="location-content">
                                        <div className="location-content-icon">
                                            <i className="ri-phone-fill"></i>
                                        </div>
                                        <p>
                                            011 2200 022
                                        </p>
                                    </div>
                                    <div className="location-content">
                                        <div className="location-content-icon">
                                            <i className="ri-mail-fill"></i>
                                        </div>
                                        <p>
                                            example@gmail.com
                                        </p>
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


