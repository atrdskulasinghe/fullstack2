import React from 'react';
import { useEffect } from 'react';
import '../components/style/profile.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Profile() {

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

            // 
            document.addEventListener('DOMContentLoaded', () => {
                let profileButton = document.getElementById("profile-button");
                let profileImage = document.getElementById("profile-image");
                let profileFile = document.getElementById("profile-file-input");
            
                profileButton.addEventListener("click", () => {
                    profileFile.click();
                });
            
                profileFile.addEventListener('change', (event) => {
                    const selectedFile = event.target.files[0];
                    if (selectedFile) {
                        const reader = new FileReader();
                        reader.onload = function (event) {
                            profileImage.src = event.target.result;
                        };
                        reader.readAsDataURL(selectedFile);
                    }
                });
            });
            

        };
        

    }, []);
    return (
        <div>
            <div className="container">
                <Menu></Menu>
                <Nav></Nav>
                <section>
                    <div className="content">
                        <div className="profile-all-content">
                            <div className="profile-content">
                                <div className="profile-content-1">
                                    <h3>Basic Information</h3>
                                    <p>Edit your account details and settings.</p>
                                </div>
                                <div className="profile-content-2">
                                    <div className="profile-content-header">
                                        <h3>Basic Information</h3>
                                        <p>Edit your account details and settings.</p>
                                    </div>
                                    <div className="profile-content-image">
                                        <h3>AVATAR</h3>
                                        <div className="profile-content-image-image">
                                            <img src="./components/images/ui/image.svg" alt="" id="profile-image" />
                                            <input type="file" id="profile-file-input" />
                                            <button className="btn" id="profile-button">Choose Photo</button>
                                        </div>
                                    </div>
                                    <div className="profile-content-input">
                                        <div className="profile-content-input-content-1">
                                            <h3>FIRST NAME</h3>
                                            <input type="text" />
                                        </div>
                                        <div className="profile-content-input-content-2">
                                            <h3>LAST NAME</h3>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="profile-content-input">
                                        <div className="profile-content-input-content-1">
                                            <h3>Email </h3>
                                            <input type="text" />
                                        </div>
                                        <div className="profile-content-input-content-2">
                                            <h3>Phone Number</h3>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-content">
                                <div className="profile-content-1">
                                    <h3>Update your password</h3>
                                    <p>Change your password.</p>
                                </div>

                                <div className="profile-content-2">
                                    <div className="profile-content-header">
                                        <h3>Update your password</h3>
                                        <p>Change your password.</p>
                                    </div>
                                    <div className="profile-content-input">
                                        <div className="profile-content-input-content-1">
                                            <h3>OLD PASSWORD</h3>
                                            <input type="password" />
                                        </div>
                                        <div className="profile-content-input-content-2">
                                            <h3>NEW PASSWORD</h3>
                                            <input type="password" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="profile-content">
                                <div className="profile-button">

                                    <button className="btn">Save Change</button>
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


