import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import useTheme from '../hooks/useTheme.js';
import { navLinks } from '../data/siteData.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" onClick={closeMenu} className="brand-link">
          <Logo />
        </Link>

        <nav className={menuOpen ? 'nav-menu is-open' : 'nav-menu'} aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}

          <button className="theme-button" type="button" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </nav>

        <div className="header-actions">
          <Link className="btn btn-small" to="/contact">
            Start Project
          </Link>

          <button
            className={menuOpen ? 'hamburger is-open' : 'hamburger'}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
