import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <div className="menu">
            <div className="menu-head">
                <i className="ri-close-fill menu-close"></i>
            </div>
            <div className="menu-item active">
                {/* <a href="">
                    <p>Home</p>
                </a> */}
                <Link to="../"><p>Home</p></Link>
            </div>
            <div className="menu-item">
                {/* <a href="">
                    <p>Movies</p>
                </a> */}
                <Link to="../movies"><p>Movies</p></Link>
            </div>
            {/* <div class="menu-item">
                <a href="">
                    <p>Terms</p>
                </a>
            </div> */}
            <div className="menu-item">
                {/* <a href="">
                    <p>About</p>
                </a> */}
                <Link to="../about"><p>About</p></Link>
            </div>
            <div className="menu-item">
                {/* <a href="">
                    <p>Contact Us</p>
                </a> */}
                <Link to="../contact"><p>Contact Us</p></Link>
            </div>
        </div>
    </div>
  )
}
