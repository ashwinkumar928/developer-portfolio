import { useState } from "react";

import "../styles/navbar.css";

const navLinks = [
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
  {
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          Ashwin<span>.</span>
        </a>

        <nav
          className="navbar-desktop"
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

        <div className="navbar-social">
          <a
            href="https://github.com/ashwinkumar928"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ashwin-kumar-7b4632344"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          className={`menu-button ${
            isMenuOpen ? "active" : ""
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() =>
            setIsMenuOpen((previous) => !previous)
          }
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-navigation ${
          isMenuOpen ? "active" : ""
        }`}
      >
        <nav className="container">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}

              <span>↗</span>
            </a>
          ))}

          <div className="mobile-socials">
            <a
              href="https://github.com/ashwinkumar928"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ashwin-kumar-7b4632344"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;