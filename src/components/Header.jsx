import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="my-container">
        <div className="header_content">
          <div className="logo_shop">
            <a href="">
              <img src="./public/Logo_main.png" alt="logo_shop" />
            </a>
          </div>
          <nav>
            <ul>
              <li className="active">
                <a href="#">New & Feature</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
              <li>
                <a href="#">Customise</a>
              </li>
              <li>
                <a href="#">SNKRS</a>
              </li>
            </ul>
          </nav>
          <div className="input_header">
            <div className="input_container">
              <button>
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="register_header">
            <button className="register_button">
              <i className="fa-regular fa-user" />
              <a href="">Register</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
