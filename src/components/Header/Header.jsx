import React from "react";
import "./Header.scss";

import { slide as Menu } from "react-burger-menu";
import { isMobile } from "react-device-detect";

const Header = props => {
  return (
    <header id={props.id} className={`${props.className} header`}>
      <a className="header__logo" href="/">
        Space Expo
      </a>
      {!isMobile ? (
        <nav className="header__nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
