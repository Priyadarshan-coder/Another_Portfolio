import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import './ContactMe.css';

const ContactMe = () => {
  return (
    <>
      <div style={{ marginTop: '2vw' }}>
        <h1 style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '2.8rem' }}>Contact Me</h1>
      </div>
      <div className='contact-container'>
        <div className="contact-card">
          <div className="contact-elems">
            <MdEmail />
            <h1><a href="mailto:priyadarshanghoshhazra908@gmail.com">Email Me</a></h1>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-elems">
            <FaLinkedin />
            <h1><a href="https://www.linkedin.com/in/priyadarshan-ghosh-hazra-a1511b212" target="_blank" rel="noopener noreferrer">My Linkedin</a></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
