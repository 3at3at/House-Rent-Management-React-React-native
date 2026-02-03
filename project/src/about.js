import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <img src="downloadd.png" alt="Logo" className="logo" />
      </header>

      <main className="about-main">
        <h1>About Rent Housing System</h1>
        <p>
          Rent Housing System helps connect displaced individuals with available
          rental properties, making housing searches easier and more accessible.
        </p>

        <h2>Our Mission</h2>
        <p>
          To simplify the process of finding affordable and reliable rental
          properties.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Easy property search</li>
          <li>Affordable housing options</li>
          <li>Secure tenant-landlord communication</li>
          <li>Real-time property availability</li>
        </ul>
      </main>
    </div>
  );
};

export default About;
