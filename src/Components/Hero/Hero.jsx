import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Chathuka Malitha-CV.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='profile' height='320' width="320"/>
        <h1><span>Hi, I'm Chathuka Malitha, </span>IT undergraduate</h1>
        <p>
        I am a motivated undergraduate from Faculty of Information Technology, University of Moratuwa, Sri Lanka.  
        </p>
        <div className="hero-action">
            <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className='hero-resume'><a href={resume} download='resume'>Download CV</a></div>
        </div>
    </div>
  )
}

export default Hero