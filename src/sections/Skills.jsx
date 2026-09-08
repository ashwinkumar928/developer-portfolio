import { skillsData } from "../data/portfolioData.js";

import "../styles/skills.css";

function Skills() {
  return (
    <section
      className="skills"
      id="skills"
    >
      <div className="container skills-container">

        <div className="skills-heading">

          <span className="skills-label">
            Skills
          </span>

          <h2 className="skills-title">
            Stack I use to
            <span> build products.</span>
          </h2>

          <p className="skills-intro">
            A focused set of technologies I currently use
            across frontend, backend, programming, databases,
            and development workflows.
          </p>

        </div>


        <div className="skills-list">

          {skillsData.map((group) => (
            <div
              className="skills-row"
              key={group.id}
            >

              <div className="skills-category">
                {group.category}
              </div>

              <div className="skills-tags">

                {group.skills.map((skill) => (
                  <span
                    className="skill-pill"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;