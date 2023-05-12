import React from "react";
import { Link } from "react-router-dom";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="shop">
        <div className="shop-name">Online Shop</div>
        <div className="shop-description">
          Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dignissimos numquam veritatis iste rerum, fuga
          debitis, laudantium consequuntur suscipit praesentium dicta
          necessitatibus. Sint molestias vero quis? .
        </div>
      </div>
      <div className="useful-links">
        <div className="useful-links-title">Useful Links</div>
        <div className="useful-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact">
        <div className="contact-title">Contact</div>
        <div className="contact-content">
          <ul>
            <li>
              <span>
                <BiMap /> 800 Collins, Docklands
              </span>
            </li>
            <li>
              <span>
                <GiRotaryPhone /> +613 400100100
              </span>
            </li>
            <li>
              <span>
                <MdOutlineMail /> test@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
