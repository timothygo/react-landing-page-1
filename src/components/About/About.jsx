import React from "react";
import "./About.scss";

import ceoImage from "../../assets/images/ceo.jpg";

const About = props => {
  return (
    <section id={props.id} className={`${props.className} section-about`}>
      <div className="about-left">
        <div className="about-left__header-container">
          <h2 className="about-left__header-container__header">
            <span className="header-span" />
            <span>About us</span>
          </h2>
        </div>
        <div className="about-left__body-container">
          <p className="about-left__body-container__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            explicabo et mollitia officia repellat exercitationem. Voluptas
            obcaecati similique aperiam eum accusamus! Commodi deleniti aliquid
            repellendus recusandae sit obcaecati amet eligendi assumenda minus?
            Illum asperiores odio esse eos maiores. Aspernatur ex temporibus
            quia sapiente blanditiis inventore quod illum nulla, iure facere.
          </p>
        </div>
        <div className="about-left__button-container">
          <button className="about-left__button-container__button">
            Learn more
          </button>
        </div>
      </div>
      <div className="about-right">
        <div className="about-right__number-container">
          <div className="about-right__number-container__rocket">
            <span className="about-right__number-container__count">23</span>
            <span className="about-right__number-container__label">
              Launched Rockets
            </span>
          </div>
          <div className="about-right__number-container__astronaut">
            <span className="about-right__number-container__count">148</span>
            <span className="about-right__number-container__label">
              Trained Astronauts
            </span>
          </div>
        </div>
        <div className="about-right__ceo-container">
          <span className="about-right__ceo-container__photo">
            <img src={ceoImage} alt="john doe photo" />
          </span>
          <div className="about-right__ceo-container__name-container">
            <span className="about-right__ceo-container__name-container__name">
              John Doe
            </span>
            <span className="about-right__ceo-container__name-container__position">
              ceo
            </span>
          </div>
          <p className="about-right__ceo-container__message">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus ullam ea debitis rem ut? Nostrum molestiae enim
            consequatur incidunt, soluta delectus beatae quisquam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
