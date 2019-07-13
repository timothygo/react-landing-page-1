import React from "react";
import "./Footer.scss";

import logo from "../../assets/images/logo.png";

const Footer = props => {
  return (
    <footer id={props.id} className={`${props.className} footer`}>
      <span className="footer__logo">
        <img src={logo} alt="space expo logo" />
      </span>
      <span className="footer__copy">&copy;2019 Space Expo</span>
      <span className="footer__created">
        Created by{" "}
        <a href="#" target="_blank">
          Timothy Go
        </a>
      </span>
    </footer>
  );
};

export default Footer;
