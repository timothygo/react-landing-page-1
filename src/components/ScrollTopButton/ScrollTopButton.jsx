import React, { useState, useCallback, useEffect } from "react";
import styles from "./ScrollTopButton.module.scss";
import "./animation.scss";
import PropTypes from "prop-types";

import { BrowserView } from "react-device-detect";
import { CSSTransition } from "react-transition-group";

const ScrollTopButton = props => {
  const { showAt } = props;
  const [scroll, setScroll] = useState(0);

  const show = scroll >= showAt;

  const handleScroll = useCallback(() => {
    setScroll(window.pageYOffset);
  }, []);

  const scrollToTop = useCallback(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <BrowserView>
      <CSSTransition in={show} timeout={300} classNames="slide">
        <button className={styles.button} onClick={scrollToTop} />
      </CSSTransition>
    </BrowserView>
  );
};

ScrollTopButton.propTypes = {
  showAt: PropTypes.number.isRequired
};

export default ScrollTopButton;
