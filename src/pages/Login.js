import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../components/style/login.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    <div className="login-content">
                        <div className="login-box">
                            <h3>Login</h3>
                            <div className="login-input">
                                <label for="">Email</label>
                                <input type="text" value={email} onChange={setEmail}/>
                                <p className="login-input-error">Please enter your password</p>
                            </div>
                            <div className="login-input">
                                <label for="">Password</label>
                                <input type="text" value={password} onChange={setPassword}/>
                                <p className="login-input-error">Please enter your password</p>
                            </div>
                            <div className="login-button">
                                <button className="btn">Login</button>
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
