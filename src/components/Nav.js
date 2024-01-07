import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div>
            <nav>
                <div className="content">
                    <div className="nav-content">
                        <div className="nav-content-0">
                            <div className="menu-icon" onClick={handleMenuToggle}>
                                <div className="menu-icon-line"></div>
                                <div className="menu-icon-line"></div>
                                <div className="menu-icon-line"></div>
                            </div>
                        </div>
                        <div className="nav-content-1">
                            <h3>Ticket Book</h3>
                        </div>
                        <div className="nav-content-2">
                            <ul>
                                <li>
                                    {/* <a href="">Home</a> */}
                                    <Link to="../">Home</Link>
                                </li>
                                {/* <li>
                                    <a href="">Terms</a>
                                    <Link to="../">Home</Link>
                                </li> */}
                                <li>
                                    {/* <a href="">About</a> */}
                                    <Link to="../about">About</Link>
                                </li>
                                <li>
                                    {/* <a href="">Contact Us</a> */}
                                    <Link to="../contact">Contact Us</Link>
                                </li>
                            </ul>
                            {/* <!-- desktop --> */}
                            <div className="nav-content-2-dsignup">
                                {/* <a href="">Signup</a> */}
                                <Link to="../signup">Signup</Link>
                            </div>
                            <div className="nav-content-2-dprofile">
                                <img src="" alt="" />
                            </div>
                            {/* <button class="nav-content-2-dbutton btn">BOOK A TICKET</button> */}
                            <button className="btn nav-content-2-dbutton">
                                <Link className='btn btn-a' to="../movies">BOOK A TICKET</Link>
                            </button>
                        </div>
                        {/* <!-- mobile --> */}
                        <div className="nav-content-3">
                            <a href=""><img src="./components/images/ticket.png" alt="" /></a>
                            <button className="btn">
                                <Link className='btn btn-a' to="../login">SIGN IN</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
