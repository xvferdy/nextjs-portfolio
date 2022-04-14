import React, { useRef } from "react";
import Link from "next/link";

// emailjs
import emailjs from "emailjs-com";

// react-icons
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

function Contact({ serviceId, templateId, userId, contactRef }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h5 ref={contactRef}>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>berlianto.ferdynand@gmail.com</h5>
            <Link href="mailto:berlianto.ferdynand@gmail.com" passHref>
              <a target="_blank">Send a message</a>
            </Link>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>xvferdy</h5>
            <Link href="https://m.me/xv.ferdy" passHref>
              <a target="_blank">Send a message</a>
            </Link>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6282292685156</h5>
            <Link
              href="https://api.whatsapp.com/send?phone=+6282292685156"
              passHref
            >
              <a target="_blank">Send a message</a>
            </Link>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="7"
            required
            placeholder="Your Message"
          ></textarea>
          <button className="btn btn--primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
