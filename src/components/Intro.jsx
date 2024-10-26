import React, { useEffect } from 'react';
import './Intro.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import gsap from 'gsap';
import Personal from '../assets/personal.jpeg'

const Intro = () => {
  useEffect(() => {
    const boldTextSpans = document.querySelectorAll('.bold-text span');
    const lightTextSpans = document.querySelectorAll('.light-text span');
    
    const animateText = (spans) => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.fromTo(
        spans,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }
      )
      .to(
        spans,
        { opacity: 0, y: -20, stagger: 0.1, duration: 0.6 },
        "+=1"
      );
    };

    animateText(boldTextSpans);
    animateText(lightTextSpans);
  }, []);

  return (
    <>
    
    <div className="intro-container">
      <div className="left"><img src={Personal} alt="" /></div>
      <div className="right">
        <h3>Hello, I'm</h3>
        <h2 className="bold-text">
          {Array.from("Priyadarshan Ghosh Hazra").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h2>
        <h2 className="light-text">
          {Array.from("Fullstack Developer").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h2>
        <div className='contact-buttons'>
          <h3><a href="">Download Cv</a></h3>
          <h3><a href="">Contact Info</a></h3>
        </div>
        <div className='contact-icons'>
          <a href="https://github.com/Priyadarshan-coder"><FaGithub style={{ fontSize: '2rem', color: 'black' }} /></a>
          <a href="https://www.linkedin.com/in/priyadarshan-ghosh-hazra-a1511b212/"><FaLinkedin style={{ fontSize: '2rem', color: 'black' }} /></a>
        </div>
      </div>
    </div>
    <div className="know-more">
      <h3 className="dark-know" style={{color:'rgba(0, 0, 0, 0.493)'}}>Get To Know More</h3>
      <h3 className="light-know">About Me</h3>
    </div>
    </>
  );
};

export default Intro;
