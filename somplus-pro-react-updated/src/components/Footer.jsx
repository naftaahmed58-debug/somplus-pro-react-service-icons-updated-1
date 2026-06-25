import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { navLinks, services } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            SomPlus Digital builds websites, branding, content, and marketing systems for
            businesses that want to grow with confidence.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Fb</a>
            <a href="#" aria-label="Instagram">Ig</a>
            <a href="#" aria-label="LinkedIn">In</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul className="footer-links">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>
                <Link to="/services">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:info@somplusdigital.com">info@somplusdigital.com</a>
            </li>
            <li>
              <a href="tel:+252612345678">+252 61 234 5678</a>
            </li>
            <li>Mogadishu, Somalia</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} SomPlus Digital. All rights reserved.</p>
        <p>Built with React.</p>
      </div>
    </footer>
  );
}
