import { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';

const initialState = {
  name: '',
  email: '',
  service: 'Web Design',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section className="page-section">
      <div className="container contact-grid">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Tell us about your project"
            text="Fill the form and we will contact you with the next steps."
          />

          <div className="contact-details glass-card">
            <h3>Direct contact</h3>
            <p>Email: info@somplusdigital.com</p>
            <p>Phone: +252 61 234 5678</p>
            <p>Location: Mogadishu, Somalia</p>
          </div>
        </Reveal>

        <Reveal className="contact-form glass-card" delay={120}>
          {submitted && <div className="form-success">Thank you. Your message has been received.</div>}

          <form onSubmit={handleSubmit}>
            <label>
              Full name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Service needed
              <select name="service" value={form.service} onChange={handleChange}>
                <option>Web Design</option>
                <option>Brand Identity</option>
                <option>Social Media</option>
                <option>SEO & Ads</option>
                <option>Full Digital Package</option>
              </select>
            </label>

            <label>
              Project details
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what you want to build..."
                rows="6"
                required
              />
            </label>

            <button className="btn" type="submit">Send Message</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
