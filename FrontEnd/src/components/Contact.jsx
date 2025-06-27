import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9dxfjx9",       // 🔁 Replace with your Service ID
      "template_d8hs67d",      // 🔁 Replace with your Template ID
      form.current,
      "o8deAh1xea6Q92rsL"        // 🔁 Replace with your Public Key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Something went wrong. Try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
