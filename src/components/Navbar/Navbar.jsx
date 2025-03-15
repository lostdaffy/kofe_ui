import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav">
          <h2 className="logo">
          <i className="ri-drinks-line"></i> Kofe
          </h2>

          <label htmlFor="" className="hamburger">
            <i className="ri-menu-line"></i>
          </label>

          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Booking</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="nav-btns">
            <a href="#" className="cart">
              <i className="ri-shopping-cart-2-line"></i>
            </a>
            <a href="#" className="user">
              <i className="ri-user-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
