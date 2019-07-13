import React, { useState, useCallback } from "react";
import "./Contact.scss";

const Contact = props => {
  const [focus, setFocus] = useState("");
  const nameInput = useFormInput("");
  const emailInput = useFormInput("");
  const messageInput = useFormInput("");

  return (
    <section id={props.id} className={`${props.className} section-contact`}>
      <div className="contact-left">
        <div className="contact-left__header-container">
          <h2 className="contact-left__header-container__header">
            <span className="header-span" />
            <span>Contact us</span>
          </h2>
        </div>
        <div className="contact-left__body-container">
          <p className="contact-left__body-container__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            explicabo et mollitia officia repellat exercitationem. Voluptas
            obcaecati similique aperiam eum accusamus! Commodi deleniti aliquid
            repellendus recusandae sit obcaecati amet eligendi assumenda.
          </p>
        </div>
        <div className="contact-left__map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123546.36075508375!2d120.88926323703038!3d14.609112688553456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C+Metro+Manila!5e0!3m2!1sen!2sph!4v1562569401475!5m2!1sen!2sph"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
      <div className="contact-right">
        <span className="contact-right__heading">Message us!</span>
        <form
          id="message-form"
          className="contact-right__form"
          onSubmit={event => event.preventDefault()}
        >
          <span
            className={
              "contact-right__form__name " +
              ((focus === "name" || nameInput.value !== "") &&
                `focus-transition`)
            }
          >
            <input
              className="contact-right__form__name__input"
              type="text"
              onFocus={() => setFocus("name")}
              onBlur={() => setFocus("")}
              {...nameInput}
            />
          </span>
          <span
            className={
              "contact-right__form__email " +
              ((focus === "email" || emailInput.value !== "") &&
                `focus-transition`)
            }
          >
            <input
              className="contact-right__form__email__input"
              type="email"
              onFocus={() => setFocus("email")}
              onBlur={() => setFocus("")}
              {...emailInput}
            />
          </span>
          <span
            className={
              "contact-right__form__message " +
              ((focus === "message" || messageInput.value !== "") &&
                `focus-transition`)
            }
          >
            <textarea
              className="contact-right__form__message__input"
              onFocus={() => setFocus("message")}
              onBlur={() => setFocus("")}
              form="message-form"
              {...messageInput}
            />
          </span>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleInput = useCallback(event => setValue(event.target.value), []);
  return {
    value,
    onChange: handleInput
  };
}

export default Contact;
