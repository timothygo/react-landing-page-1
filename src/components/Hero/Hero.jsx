import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Hero.scss";
import { isMobile } from "react-device-detect";

import {
  useSpring,
  useTransition,
  useChain,
  animated,
  config
} from "react-spring";

const Hero = props => {
  const [height, setHeight] = useState(0);
  const wordRef = useRef();
  const backgroundRef = useRef();

  const wordItems = [
    "Explore",
    "Reality",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sitillum eveniet sunt quia quos."
  ];

  const wordTransition = useTransition(wordItems, item => item, {
    config: config.slow,
    ref: wordRef,
    trail: 250,
    from: { opacity: 0, transform: "translateY(7.9rem)" },
    enter: { opacity: 1, transform: "translateY(0rem)" },
    leave: { opacity: 0, transform: "translateY(7.9rem)" }
  });

  const backgroundProps = useSpring({
    config: config.slow,
    ref: backgroundRef,
    transform: "scale(1)",
    from: {
      transform: "scale(2)"
    }
  });

  const curtainTransition = useCurtainTransition(4);

  useChain([wordRef, curtainTransition.ref, backgroundRef], [0.5, 1.7, 1.9]);

  const handleResize = useCallback(() => {
    if (isMobile) {
      setHeight(window.outerHeight);
    } else {
      setHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id={props.id}
      className={`${props.className} hero`}
      style={height > 0 ? { height: `${height}px` } : {}}
    >
      <animated.span className="hero__background" style={backgroundProps} />

      {!curtainTransition.isFinished && curtainTransition.element}

      <h1 className="hero__title">
        {wordTransition.map(({ item, key, props }) => {
          if (key <= 1) {
            return (
              <React.Fragment key={key}>
                <animated.span style={props}>{item}</animated.span>

                {key === 0 && " "}
              </React.Fragment>
            );
          }
          return null;
        })}
      </h1>
      <div className="hero__message">
        {wordTransition.map(({ item, key, props }) => {
          if (key === 2) {
            return (
              <animated.p key={key} style={props}>
                {item}
              </animated.p>
            );
          }
          return null;
        })}
      </div>

      <span className="hero__mouse" />
    </section>
  );
};

function useCurtainTransition(count) {
  let items = new Array(count);
  for (let i = 0; i < count; i++) items[i] = i;

  let [curtain, setCurtain] = useState(0);
  let curtainRef = useRef();
  let curtainTransition = useTransition(items, item => item, {
    config: config.slow,
    ref: curtainRef,
    trail: 145,
    from: { transform: "scaleY(1)" },
    enter: { transform: "scaleY(0)" },
    onRest: () => setCurtain(curtain => curtain + 1)
  });

  const element = (
    <div className="hero__transition">
      {curtainTransition.map(({ item, key, props }) => (
        <animated.span key={key} style={props} />
      ))}
    </div>
  );

  return {
    count,
    ref: curtainRef,
    element,
    isFinished: curtain === count
  };
}

export default Hero;
