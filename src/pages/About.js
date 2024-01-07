import React from 'react';
import { useEffect } from 'react';
import '../components/style/about.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

import background from '../images/ui/background-3.jpg';
import aboutImage from '../images/ui/about.png';

export default function About() {
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
            <Menu></Menu>
            <Nav></Nav>
            <section>
                <div className="about-header">
                    <img src={background} alt="" />
                    <div className="about-header-text">
                        <div>
                            <h1>About</h1>
                            <div className="about-header-url">
                                <ul>
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>/</li>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="about-content">
                        <div className="about-content-1">
                            <p>
                                To give the audience the finest movie experience. we team up with the top theatre networks.
                                <br /><br />
                                The best method to get ticktes is through Cinema! While the public has been purchasing
                                tickets online. We have recognized their requirements and desires.
                                <br /><br />
                                The easiest and safest method to make reservations is through Cinema.
                                <br /><br />
                                We Provide the greatest method for Purchasing movie tickets. as suggested by our motto.
                            </p>
                        </div>
                        <div className="about-content-2">
                            <img src={aboutImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

