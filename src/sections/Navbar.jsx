import { useState } from "react";

import "../styles/navbar.css";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          Ashwin
          <span className="navbar-brand-dot">.</span>
        </a>

        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="navbar-desktop-cta">
          <a
            href="#contact"
            className="button button-secondary navbar-cta"
          >
            Contact Me
          </a>
        </div>

        <button
          className={`navbar-menu-button ${
            isMenuOpen ? "open" : ""
          }`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-menu-icon">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <nav
          className="container mobile-menu-inner"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-menu-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="button button-secondary navbar-cta"
            onClick={closeMenu}
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;