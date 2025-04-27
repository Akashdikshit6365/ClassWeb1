import React from 'react';
import '../styles/HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Learn From Home</h1>
        <h2>Education Courses</h2>
        <div className="search-bar">
          <select className="course-select">
            <option>Courses</option>
            <option>Courses 1</option>
            <option>Courses 2</option>
            <option>Courses 3</option>
          </select>
          <input type="text" placeholder="Keyword" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
