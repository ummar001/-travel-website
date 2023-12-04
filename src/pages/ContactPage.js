// src/pages/ContactPage.js
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="custom-header">
        <div className="logo">GlobeTrotter Getaways</div>
      </header>
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="map-and-address">
        <div className="map">Interactive Map</div>
        <div className="address">
          <h3>Our Office</h3>
          <p>786 Horizon Way, Nomad's Peak, CA 94105, United States</p>
        </div>
      </section>
      <section className="customer-service">
        <h2>Customer Service</h2>
        <p>For assistance, feel free to contact us:</p>
        <p>Phone: +1 (555) 489-7263</p>
        <p>Email: info@globetrottergetaways.com</p>
        <p>Hours of Operation: Mon-Fri, 9 AM - 5 PM</p>
      </section>
    </div>
  );
};

export default ContactPage;
