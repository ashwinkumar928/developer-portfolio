import { useState } from "react";

import "../styles/contact.css";


function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.531 2.865 8.374 6.839 9.729.5.095.682-.222.682-.493 0-.243-.009-.888-.014-1.743-2.782.618-3.369-1.373-3.369-1.373-.455-1.184-1.11-1.499-1.11-1.499-.908-.637.069-.624.069-.624 1.004.072 1.532 1.057 1.532 1.057.892 1.566 2.341 1.114 2.91.852.091-.663.349-1.114.635-1.37-2.221-.259-4.555-1.14-4.555-5.071 0-1.12.39-2.036 1.03-2.754-.103-.26-.447-1.303.098-2.716 0 0 .84-.276 2.75 1.052A9.31 9.31 0 0 1 12 6.984a9.3 9.3 0 0 1 2.504.346c1.909-1.328 2.748-1.052 2.748-1.052.546 1.413.202 2.456.099 2.716.641.718 1.029 1.634 1.029 2.754 0 3.941-2.338 4.809-4.566 5.063.359.317.679.943.679 1.901 0 1.372-.012 2.479-.012 2.817 0 .273.18.593.688.492C19.14 20.623 22 16.783 22 12.253 22 6.59 17.523 2 12 2Z" />
    </svg>
  );
}


function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.25 3.5A1.75 1.75 0 1 1 5.25 7a1.75 1.75 0 0 1 0-3.5ZM3.75 8.5h3v11.75h-3V8.5Zm5 0h2.875v1.606h.041c.4-.76 1.38-1.856 2.84-1.856 3.037 0 3.6 2 3.6 4.598v7.402h-3v-6.563c0-1.566-.028-3.582-2.183-3.582-2.186 0-2.521 1.707-2.521 3.468v6.677h-3V8.5Z" />
    </svg>
  );
}


function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}


function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const subject =
      `Portfolio message from ${formData.name}`;

    const body =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `${formData.message}`;

    window.location.href =
      `mailto:ashwinkumaryt9386@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };


  return (
    <section
      className="contact"
      id="contact"
    >
      <div className="container">

        <div className="contact-heading">
          <span className="contact-label">
            Connect
          </span>

          <h2 className="contact-title">
            Let&apos;s connect.
          </h2>
        </div>


        <div className="contact-grid">

          <div className="contact-social-section">

            <h3 className="contact-small-heading">
              Find me on
            </h3>


            <div className="contact-social-list">

              <a
                href="https://github.com/ashwinkumar928"
                target="_blank"
                rel="noreferrer"
                className="contact-social-card"
              >
                <div className="contact-social-icon">
                  <GithubIcon />
                </div>

                <div>
                  <span>
                    GitHub
                  </span>

                  <strong>
                    @ashwinkumar928
                  </strong>
                </div>
              </a>


              <a
                href="https://www.linkedin.com/in/ashwin-kumar-7b4632344"
                target="_blank"
                rel="noreferrer"
                className="contact-social-card"
              >
                <div className="contact-social-icon">
                  <LinkedInIcon />
                </div>

                <div>
                  <span>
                    LinkedIn
                  </span>

                  <strong>
                    Ashwin Kumar
                  </strong>
                </div>
              </a>


              <a
                href="mailto:ashwinkumaryt9386@gmail.com"
                className="contact-social-card"
              >
                <div className="contact-social-icon">
                  <EmailIcon />
                </div>

                <div>
                  <span>
                    Email
                  </span>

                  <strong>
                    ashwinkumaryt9386@gmail.com
                  </strong>
                </div>
              </a>

            </div>

          </div>


          <div className="contact-form-section">

            <h3 className="contact-small-heading">
              Send a message
            </h3>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />


              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />


              <textarea
                name="message"
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={handleChange}
                required
              />


              <button
                type="submit"
                className="contact-send-button"
              >
                <SendIcon />

                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}


export default Contact;