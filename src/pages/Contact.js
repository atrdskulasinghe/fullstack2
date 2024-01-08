import React from 'react';
import { useEffect } from 'react';
import '../components/style/contact.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

import background from '../images/ui/background-3.jpg';

export default function Contact() {
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
                                <h1>Contact Us</h1>
                                <div className="input-group-1">
                                    <div className="input-group-content-1">
                                        <h2>Your name</h2>
                                        <input type="text" />
                                    </div>
                                    <div className="input-group-content-2">
                                        <h2>Your email</h2>
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className="input-group-2">
                                    <h2>Subject</h2>
                                    <input type="text" />
                                </div>
                                <div className="input-group-2">
                                    <h2>Your message</h2>
                                    <textarea name=""></textarea>
                                </div>
                                <div className="contact-content-1-button">
                                    <button>Submit</button>
                                </div>
                            </div>
                            <div className="contact-content-2">
                                <h1 style={{marginTop: '20px'}}>Info Location</h1>
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


