import profileImage from "../assets/images/ashwin-profile.jpg";

import "../styles/hero.css";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.531 2.865 8.374 6.839 9.729.5.095.682-.222.682-.493 0-.243-.009-.888-.014-1.743-2.782.618-3.369-1.373-3.369-1.373-.455-1.184-1.11-1.499-1.11-1.499-.908-.637.069-.624.069-.624 1.004.072 1.532 1.057 1.532 1.057.892 1.566 2.341 1.114 2.91.852.091-.663.349-1.114.635-1.37-2.221-.259-4.555-1.14-4.555-5.071 0-1.12.39-2.036 1.03-2.754-.103-.26-.447-1.303.098-2.716 0 0 .84-.276 2.75 1.052A9.31 9.31 0 0 1 12 6.984a9.3 9.3 0 0 1 2.504.346c1.909-1.328 2.748-1.052 2.748-1.052.546 1.413.202 2.456.099 2.716.641.718 1.029 1.634 1.029 2.754 0 3.941-2.338 4.809-4.566 5.063.359.317.679.943.679 1.901 0 1.372-.012 2.479-.012 2.817 0 .273.18.593.688.492C19.14 20.623 22 16.783 22 12.253 22 6.59 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M5.25 3.5A1.75 1.75 0 1 1 5.25 7a1.75 1.75 0 0 1 0-3.5ZM3.75 8.5h3v11.75h-3V8.5Zm5 0h2.875v1.606h.041c.4-.76 1.38-1.856 2.84-1.856 3.037 0 3.6 2 3.6 4.598v7.402h-3v-6.563c0-1.566-.028-3.582-2.183-3.582-2.186 0-2.521 1.707-2.521 3.468v6.677h-3V8.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      className="hero"
      id="home"
    >
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            Full-Stack Developer
          </span>

          <h1 className="hero-title">
            <span className="hero-title-intro">
              Hi, I&apos;m
            </span>

            <span className="hero-title-name">
              Ashwin Kumar.
            </span>
          </h1>

          <p className="hero-description">
            Computer Science undergraduate building
            <strong> modern full-stack web applications </strong>
            with clean interfaces and reliable backend systems
            using React, Node.js, Express, and modern databases.
          </p>

          <div className="hero-location">
            <LocationIcon />

            <span>
              Bhubaneswar / Patna, India
            </span>
          </div>

          <div className="hero-actions">
  <a
    href="#projects"
    className="button button-primary hero-button"
  >
    View Projects
    <ArrowIcon />
  </a>

  <a
    href="#contact"
    className="button button-secondary hero-button"
  >
    Contact Me
  </a>
</div>

          <div className="hero-socials">
            <a
              href="https://github.com/ashwinkumar928"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="Visit Ashwin Kumar's GitHub profile"
            >
              <GithubIcon />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ashwin-kumar-7b4632344"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="Visit Ashwin Kumar's LinkedIn profile"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-border" />

            <div className="hero-photo-card">
              <img
                src={profileImage}
                alt="Developer profile portrait"
                className="hero-photo"
              />
            </div>

            <div
              className="hero-code-mark"
              aria-hidden="true"
            >
              &lt;/&gt;
            </div>

            <div className="hero-tech-card">
              <span className="hero-tech-label">
                Core Stack
              </span>

              <div className="hero-tech-list">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;