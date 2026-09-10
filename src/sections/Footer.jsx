import "../styles/footer.css";



function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-identity">

          <h2>
            Ashwin Kumar
          </h2>

          <p>
            Full-Stack Developer
          </p>

        </div>


        <div className="footer-links">

          <a
            href="/Ashwin_Kumar_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>

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


        <div className="footer-meta">

          <span className="footer-year">
            © {currentYear}
          </span>

          <a
            href="#home"
            className="footer-top"
          >
            Back to top ↑
          </a>

        </div>

      </div>

    </footer>
  );
}


export default Footer;