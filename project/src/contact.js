import React from 'react';
import './contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <img src="downloadd.png" alt="Logo" className="logo" />
      </header>

      <main className="contact-main">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
