
import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top overlay-top bg-dark text-white-50 py-5">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-6 mb-5">
              <a href="/" className="navbar-brand">
                <h1 className="mt-n2 text-uppercase text-white">
                  <i className="fa fa-book-reader mr-3" /> Edukate
                </h1>
              </a>
              <p className="m-0 text-light">
                Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est,
                tempor rebum ipsum sit ea tempor stet et consetetur dolores.
              </p>
            </div>
            <div className="col-md-6 mb-5">
              <h3 className="text-white mb-4">Newsletter</h3>
              <div className="w-100">
                <div className="input-group newsletter-group">
                  <input
                    type="email"
                    className="form-control border-light"
                    placeholder="Your Email Address"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p><i className="fa fa-map-marker-alt mr-2" /> 123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt mr-2" /> +012 345 67890</p>
              <p><i className="fa fa-envelope mr-2" /> info@example.com</p>
              <div className="social-icons mt-4">
                <a href="#" className="text-white mr-4"><i className="fab fa-twitter fa-2x" /></a>
                <a href="#" className="text-white mr-4"><i className="fab fa-facebook-f fa-2x" /></a>
                <a href="#" className="text-white mr-4"><i className="fab fa-linkedin-in fa-2x" /></a>
                <a href="#" className="text-white"><i className="fab fa-instagram fa-2x" /></a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Our Courses</h3>
              <div className="footer-links">
                {['Web Design', 'Apps Design', 'Marketing', 'Research', 'SEO'].map(course => (
                  <a key={course} href="#" className="text-white-50 mb-2">
                    <i className="fa fa-angle-right mr-2" /> {course}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="footer-links">
                {['Privacy Policy', 'Terms & Condition', 'Regular FAQs', 'Help & Support', 'Contact'].map(link => (
                  <a key={link} href="#" className="text-white-50 mb-2">
                    <i className="fa fa-angle-right mr-2" /> {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-dark text-white-50 border-top py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0">
                &copy; <span className="text-white">Edukate</span>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0">
                Designed by <a className="text-white" href="https://htmlcodex.com">HTML Codex</a>
                &nbsp;|&nbsp; Distributed by <a className="text-white" href="https://themewagon.com">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
