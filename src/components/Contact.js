import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_epp1vse",
        "template_rusn30k",
        form.current,
        "CuMP1UaiX-BDimN1x"
      )
      .then(
        (result) => {
          window.location.reload(true);
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-wrapper" id="contact-section">
      <div className="container">
        <h2>Contact me</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Phone Number</label>
          <input type="text" name="contact_number" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
