import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div>
            <footer>
                <div className="content">
                    <div className="footer-content">
                        {/* <!-- <div class="footer-background">
                        <img src="./components/images/footer-background.jpg" alt="">
                    </div> --> */}
                        <div className="footer-content-1">
                            <div className="footer-all-content">
                                <h3 className="footer-logo">Ticket Book</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis omnis ratione
                                    quos, similique blanditiis laboriosam voluptate delectus eum, atque fuga ea error in ad
                                    corrupti eaque obcaecati vitae consectetur? Consectetur!
                                </p>
                                <ul>
                                    <li>
                                        <p><i className="ri-map-pin-fill"></i>214 West Arnold St. New York, NY 10002</p>
                                    </li>
                                    <li>
                                        <p><i className="ri-phone-fill"></i>(123) 345-6789</p>
                                    </li>
                                    <li>
                                        <p><i className="ri-phone-fill"></i>(+100) 123 456 7890</p>
                                    </li>
                                    <li>
                                        <p><i className="ri-customer-service-2-line"></i>support@realvilla.demo</p>
                                    </li>
                                    <li>
                                        <p><i className="ri-time-line"></i>Mon - Sun / 9:00AM - 8:00PM</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-2">
                            <div className="footer-all-content">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li>
                                        {/* <a href="">Home</a> */}
                                        <Link to="../">Home</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="../login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="../signup">Signup</Link>
                                    </li> */}

                                    <li>
                                        {/* <a href="">Home</a> */}
                                        <Link to="../movies">Movies</Link>
                                    </li>
                                    <li>
                                        {/* <a href="">About</a> */}
                                        <Link to="../about">About</Link>
                                    </li>
                                    <li>
                                        {/* <a href="">Contact Us</a> */}
                                        <Link to="../contact">Contact Us</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-3">
                            <div className="footer-all-content">
                                <h2>Follow Us</h2>
                                <p>
                                    Follow us and stay in touch to get the latest news
                                </p>
                                <ul>
                                    <li>
                                        <a href="">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="ri-pinterest-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="ri-whatsapp-line"></i>
                                        </a>
                                    </li>

                                </ul>
                                <div className="footer-news">
                                    <h2>Newsletter</h2>
                                    <p>
                                        Don’t miss to subscribe to our news feeds, kindly fill the form below
                                    </p>
                                    <input type="text" placeholder="Your email address" />
                                    <button type="menu">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
