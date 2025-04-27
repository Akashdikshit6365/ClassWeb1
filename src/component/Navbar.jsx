import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="brand">
          <i className="fa fa-book-reader"></i>
          <span>Edukate</span>
        </div>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#courses" className="nav-link">Courses</a>
          <div className="dropdown">
            <button className="nav-link drop-btn">
              Pages <i className="fa fa-chevron-down"></i>
            </button>
            <div className="dropdown-menu">
              <a href="#detail" className="dropdown-item">Course Detail</a>
              <a href="#features" className="dropdown-item">Our Features</a>
              <a href="#team" className="dropdown-item">Instructors</a>
              <a href="#testimonial" className="dropdown-item">Testimonial</a>
            </div>
          </div>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="join-btn">Join Us</button>
        </nav>

        <button
          className={`hamburger ${open ? 'is-active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
