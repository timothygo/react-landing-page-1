import React, { useState } from "react";
import "./Services.scss";

import logo from "../../assets/images/logo.png";

const Services = props => {
  const [services, setServices] = useState([
    {
      id: 0,
      img: {
        uri: logo,
        alt: ""
      },
      title: "Training",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, illum?"
    },
    {
      id: 1,
      img: {
        uri: logo,
        alt: ""
      },
      title: "Training",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, illum?"
    },
    {
      id: 2,
      img: {
        uri: logo,
        alt: ""
      },
      title: "Training",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, illum?"
    }
  ]);

  return (
    <section id={props.id} className={`${props.className} section-services`}>
      <h2 className="section-services__heading">
        Take your first step with us!
      </h2>
      <p className="section-services__sub-heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit
        nostrum enim nisi facilis? Sunt qui ipsa cumque tempora facere.
      </p>
      <div className="services-container">
        {services.map(service => {
          return (
            <div
              className="services-container__item-container"
              key={service.id}
            >
              <img
                className="services-container__item-container__image"
                src={service.img.uri}
                alt={service.img.alt}
              />
              <h3 className="services-container__item-container__heading">
                {service.title}
              </h3>
              <p className="services-container__item-container__description">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
