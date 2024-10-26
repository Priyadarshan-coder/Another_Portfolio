import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <h1>Priyadarshan Ghosh Hazra</h1>
      <div className={`elems ${menuOpen ? 'show' : 'hide'}`}>
        <h2><a href="#about">About</a></h2>
        <h2><a href="#achievements">Achievements</a></h2>
        <h2><a href="#skills">Skills</a></h2>
        <h2><a href="#projects">Projects</a></h2>
        <h2><a href="#education">Education</a></h2>
      </div>
      <div className="hamburger" >
        {menuOpen ? (
          <RxCross2 onClick={toggleMenu} style={{ fontSize: '3rem', width: '40px', height: '60px' }} />
        ) : (
          <RxHamburgerMenu onClick={toggleMenu} style={{ fontSize: '3rem', width: '40px', height: '60px' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
