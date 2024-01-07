import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../components/style/signup.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Signup() {

    const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "", password: "", confirmPassword: "" });

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

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

    const addNewUser = () => {

        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPhoneNumberError("");
        setPasswordError("");
        setConfirmPasswordError("");


        if (newUser.firstName == "" || newUser.firstName == undefined || newUser.firstName == null) {
            setFirstNameError("Please Enter your first name");
        }

        if (newUser.lastName == "" || newUser.lastName == undefined || newUser.lastName == null) {
            setLastNameError("Please Enter your last name");
        }

        if (newUser.email == "" || newUser.email == undefined || newUser.email == null) {
            setEmailError("Please Enter your email");
        }

        if (newUser.phoneNumber == "" || newUser.phoneNumber == undefined || newUser.phoneNumber == null) {
            setPhoneNumberError("Please Enter your phone number");
        }

        if (newUser.password == "" || newUser.password == undefined || newUser.password == null) {
            setPasswordError("Please Enter your first password");
        }

        if (newUser.confirmPassword == "" || newUser.confirmPassword == undefined || newUser.confirmPassword == null) {
            setConfirmPasswordError("Please Enter your first confirm password");
        }

        if (newUser.password !== newUser.confirmPassword) {
            setConfirmPasswordError("New password and confirm password doesn't match Or don't match");
        }

        if (newUser.firstName == "" || newUser.firstName == undefined || newUser.firstName == null) {
        } else if (newUser.lastName == "" || newUser.lastName == undefined || newUser.lastName == null) {
        } else if (newUser.email == "" || newUser.email == undefined || newUser.email == null) {
        } else if (newUser.phoneNumber == "" || newUser.phoneNumber == undefined || newUser.phoneNumber == null) {
        } else if (newUser.password == "" || newUser.password == undefined || newUser.password == null) {
        } else if (newUser.confirmPassword == "" || newUser.confirmPassword == undefined || newUser.confirmPassword == null) {
        } else if (newUser.password !== newUser.confirmPassword) {
        } else {
            axios
                .post("http://localhost:8000/", newUser)
                .then(() => {
                    setNewUser({ FirstName: "", LastName: "", Email: "", PhoneNumber: "", Password: "", ConfirmPassword: "" });
                })
                .catch((error) => {
                    console.error("error", error);
                });

            setFirstNameError("");
            setLastNameError("");
            setEmailError("");
            setPhoneNumberError("");
            setPasswordError("");
            setConfirmPasswordError("");

            window.location.href = "../login";

        }

    };

    const setFirstName = (e) => {
        setNewUser({ ...newUser, firstName: e.target.value });
    };

    const setLastName = (e) => {
        setNewUser({ ...newUser, lastName: e.target.value });
    };

    const setEmail = (e) => {
        setNewUser({ ...newUser, email: e.target.value });
    };

    const setPhoneNumber = (e) => {
        setNewUser({ ...newUser, phoneNumber: e.target.value });
    };

    const setPassword = (e) => {
        setNewUser({ ...newUser, password: e.target.value });
    };

    const setConfirmPassword = (e) => {
        setNewUser({ ...newUser, confirmPassword: e.target.value });
    };

    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>

                <section>
                    <div className="signup-content">
                        <div className="signup-box">
                            <h3>Signup</h3>
                            <div className="signup-input">
                                <label for="">First Name</label>
                                <input type="text" value={newUser.firstName} onChange={setFirstName} />
                                <p className="signup-input-error">{firstNameError}</p>
                            </div>
                            <div className="signup-input">
                                <label for="">Last Name</label>
                                <input type="text" value={newUser.lastName} onChange={setLastName} />
                                <p className="signup-input-error">{lastNameError}</p>
                            </div>
                            <div className="signup-input">
                                <label for="">Email</label>
                                <input type="text" value={newUser.email} onChange={setEmail} />
                                <p className="signup-input-error">{emailError}</p>
                            </div>
                            <div className="signup-input">
                                <label for="">Phone Number</label>
                                <input type="text" value={newUser.phoneNumber} onChange={setPhoneNumber} />
                                <p className="signup-input-error">{phoneNumberError}</p>
                            </div>
                            <div className="signup-input">
                                <label for="">Password</label>
                                <input type="text" value={newUser.password} onChange={setPassword} />
                                <p className="signup-input-error">{passwordError}</p>
                            </div>
                            <div className="signup-input">
                                <label for="">Confirm Password</label>
                                <input type="text" value={newUser.confirmPassword} onChange={setConfirmPassword} />
                                <p className="signup-input-error">{confirmPasswordError}</p>
                            </div>
                            <div className="signup-button">
                                <button className="btn" onClick={addNewUser}>Signup</button>
                            </div>
                            <div className="signup-login">
                                <p>Already have an account ? <Link to="../login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer></Footer>
            </div>
        </div>
    )
}

