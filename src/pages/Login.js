import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../components/style/login.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Login() {

    const [newUser, setNewUser] = useState({
        email: "",
        password: ""
    });

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showInvalidMessage, setShowInvalidMessage] = useState(false);

    const [data, setData] = useState([]);
    const [sessionValue, setSessionValue] = useState([]);


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

    const getUser = () => {

        setEmailError("");
        setPasswordError("");
        setShowInvalidMessage(false);

        if (newUser.email === "" || newUser.email === undefined || newUser.email === null) {
            setEmailError("Please Enter your email");
        }

        if (newUser.password === "" || newUser.password === undefined || newUser.password === null) {
            setPasswordError("Please Enter your first password");
        }

        if (newUser.email === "" || newUser.email === undefined || newUser.email === null) {
        } else if (newUser.password === "" || newUser.password === undefined || newUser.password === null) {
        } else {
            axios
                .get("http://localhost:8000/")
                .then((res) => {
                    const users = res.data;
                    const enteredEmail = newUser.email;
                    const enteredPassword = newUser.password;
                    const matchedUser = users.find(user => user.email === enteredEmail && user.password === enteredPassword);

                    if (matchedUser) {
                        console.log("Login successful!");
                        sessionStorage.setItem('loggedInUserEmail', enteredEmail);

                        window.location.href= "../signup";
                    } else {
                        console.log("Invalid credentials.");
                        setShowInvalidMessage(true);
                    }

                })
                .catch((error) => {
                    console.error("Error:", error);
                });

        }


    };



    const updateEmail = (e) => {
        setNewUser({ ...newUser, email: e.target.value });
    };

    const updatePassword = (e) => {
        setNewUser({ ...newUser, password: e.target.value });
    };

    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>
                <section>
                    <div className="login-content">
                        <div className="login-box">
                            {showInvalidMessage && (
                                <div className="login-invalid">
                                    <p>Invalid User name or password</p>
                                </div>
                            )}
                            <h3>Login</h3>
                            <div className="login-input">
                                <label for="">Email</label>
                                <input type="text" value={newUser.email} onChange={updateEmail} />
                                <p className="login-input-error">{emailError}</p>
                            </div>
                            <div className="login-input">
                                <label for="">Password</label>
                                <input type="text" value={newUser.password} onChange={updatePassword} />
                                <p className="login-input-error">{passwordError}</p>
                            </div>
                            <div className="login-button">
                                <button className="btn" onClick={getUser}>Login</button>
                            </div>
                            <div className="signup-login">
                                <p>Don't have an account ? <Link to="../signup">Signup</Link></p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    )
}
