import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile" width="450" height="500" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              I am a motivated undergraduate with a solid academic background
              and strong technical skills. Passionate about continuous learning,
              I’ve developed the adaptability needed to stay current in software
              engineering.
            </p>
            <p>
              As a collaborative team player, I excel in communication and
              building professional relationships. I am now seeking a Software
              Engineering internship to apply and expand my knowledge in a
              professional setting.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <ul>
                <li>C</li>
              </ul>
              <ul>
                <li>Java</li>
              </ul>
            </div>
            <div className="about-skill">
            <ul>
                <li>Python</li>
              </ul>
              <ul>
                <li>HTML & Sass</li>
              </ul>
            </div>
            <div className="about-skill">
            <ul>
                <li>React.js</li>
              </ul>
              <ul>
                <li>ASP.NET Core</li>
              </ul>
            </div>
            <div className="about-skill">
            <ul>
                <li>MSSQL</li>
              </ul>
              <ul>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
