import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import github_icon from "../../assets/github.png";
import linkedin_icon from "../../assets/linkedin.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d2e7f7e2-03b1-4bda-81e2-e3bfeb274c08");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Your message has been sent!");
    }
  };
return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Make Contact</h1>
            <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <div className="contact-left-logo">
                    <a href="https://github.com/chathuka-code">
                        <img src={github_icon} alt="github_icon" height="150" width="150" />
                    </a>
                    <a href="https://www.linkedin.com/in/chathuka-malitha-37094526b/">
                        <img
                            src={linkedin_icon}
                            alt="linkedin_icon"
                            height="150"
                            width="150"
                        />
                    </a>
                </div>
                <p>
                    I am always open to discussing product design work or partnerships.
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail_icon" />
                        <p>chathukamalitha@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call_icon" />
                        <p>+94714524868</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location_icon" />
                        <p>Wettewa, Matugama, Sri Lanka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" name="name" />
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email" name="email" />
                <label>Your Message</label>
                <textarea
                    placeholder="Enter your message"
                    name="message"
                    rows="8"
                ></textarea>
                <button type="submit" className="contact-submit">
                    Send Message
                </button>
            </form>
        </div>
    </div>
);
};

export default Contact;
