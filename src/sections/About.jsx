import "../styles/about.css";

function About() {
  return (
    <section
      className="about"
      id="about"
    >
      <div className="container about-container">

        <div className="about-heading">

          <span className="about-label">
            About
          </span>

          <h2 className="about-title">
            I build ideas into
            <span> working products.</span>
          </h2>

        </div>


        <div className="about-body">

          <div className="about-intro">

            <p>
              I&apos;m Ashwin Kumar, a Computer Science
              undergraduate interested in building practical
              full-stack web applications.
            </p>

            <p>
              I enjoy working across frontend, backend, APIs,
              and databases to turn an idea into something
              functional and useful.
            </p>

          </div>


          <div className="about-details">

            <div className="about-detail">

              <span className="about-detail-label">
                Education
              </span>

              <div>
                <h3>
                  B.Tech in Computer Science
                </h3>

                <p>
                  KIIT · 2023 — 2027
                </p>
              </div>

            </div>


            <div className="about-detail">

              <span className="about-detail-label">
                Current Focus
              </span>

              <div>
                <h3>
                  Full-Stack Development
                </h3>

                <p>
                  React, Node.js, Express, REST APIs
                </p>
              </div>

            </div>


            <div className="about-detail">

              <span className="about-detail-label">
                Career Goal
              </span>

              <div>
                <p className="about-goal">
                  Turn ideas into real digital products,
                  learn new technologies, and continuously
                  improve my development and problem-solving
                  skills.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;