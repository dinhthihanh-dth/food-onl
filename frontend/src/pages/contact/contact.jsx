import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Liên hệ với chúng tôi</h1>
      <p>Gửi cho chúng tôi thắc mắc hoặc phản hồi của bạn.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Tên của bạn"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email của bạn"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Nội dung tin nhắn"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Gửi tin nhắn</button>
      </form>

      {/* Bản đồ */}
      <div className="map-container">
        <h2>Địa chỉ của chúng tôi</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1276312741835!2d106.69524237480593!3d10.80047615878809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c58df88ff3%3A0x7a5ebf1276c5e1a3!2zQ8O0bmcgVHkgQ-G7lSBQaOG7pyBN4bqhaSBIw6BuZyBCw6xjaCBLaG9h!5e0!3m2!1svi!2s!4v1691781093042!5m2!1svi!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
