import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Feel free to reach out for collaboration or opportunities.
        </p>
      </div>

      <div className="contact-merged">
     {/* LEFT — CONTACT INFO */}
<div className="contact-info-card">
  <h3 className="contact-info-title">Find Me On</h3>

  <div className="contact-icons">
    {/* Email */}
    <a
      href="mailto:noushinanikakhan@gmail.com"
      className="contact-icon"
      title="Email"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="email" />
    </a>

    {/* Phone */}
    <a
      href="tel:+8801765978085"
      className="contact-icon"
      title="Phone"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="phone" />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/8801765978085"
      target="_blank"
      rel="noreferrer"
      className="contact-icon"
      title="WhatsApp"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="whatsapp" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/noushinanikakhan"
      target="_blank"
      rel="noreferrer"
      className="contact-icon"
      title="GitHub"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="github" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/noushin-anika-khan"
      target="_blank"
      rel="noreferrer"
      className="contact-icon"
      title="LinkedIn"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
    </a>
  </div>
</div>


        {/* RIGHT — CONTACT FORM */}
        <div className="contact-form-card">
          <h3 className="contact-form-title">Get In Touch</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              className="form-textarea"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="form-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
