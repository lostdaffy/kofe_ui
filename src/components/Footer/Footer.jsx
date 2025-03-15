import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
     <footer>
      <div className="footer">
        <div className="footer-wrap">
          <div className="footer-logo">
            <h1><i className="ri-drinks-fill"></i> Kofe</h1>
            <p>Collins Street West, Victoria 8007 Australia</p>
            <input type="text" placeholder="Enter Your Email"/>
          </div>

          <div className="info-links">
            <h3 className="links-head">Information</h3>
            <ul>
              <li><a href="#">About team</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservation</a></li>
              <li><a href="#">Review</a></li>
              <li><a href="#">Our Method</a></li>
            </ul>
          </div>

          <div className="menu-links">
            <h3 className="links-head">Best Product</h3>
            <ul>
              <li><a href="#">Coffee & Tea</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Bakery</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Our Method</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="links-head">Contact</h3>
            <p>Phone: +91 8273998875</p>
            <p>Email: satyaasingh001@gmail.com</p>
            <p>Address: Saharanpur(UP), India, 247001</p>
            <div className="social-icons">
              <a href="#"><i className="ri-facebook-fill"></i></a>
              <a href="#"><i className="ri-twitter-x-fill"></i></a>
              <a href="#"><i className="ri-instagram-line"></i></a>
            </div>
          </div>

          <div className="footer-time">
            <h3 className="links-head">Opening Hours</h3>
            <p>Saturday .......... 09:00 - 23:00</p>
            <p>Sunday .......... 09:00 - 00:00</p>
            <p>Mon - Fri .......... 09:00 - 00:00</p>
          </div>
        </div>
      </div>
    </footer>

    <div className="copyright">
      <p>Copyright 2024 kofe. All rights reserved</p>
    </div>
    </div>
  );
};

export default Footer;
