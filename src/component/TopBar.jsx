import React from 'react';
import '../Styles/TopBar.css'


const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <small><i className="fa fa-phone-alt"></i> +012 345 6789</small>
        <small className="separator">|</small>
        <small><i className="fa fa-envelope"></i> info@example.com</small>
      </div>
      <div className="topbar-right">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  );
};

export default Topbar;
