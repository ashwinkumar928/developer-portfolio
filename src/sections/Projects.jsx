import {
  projectsData,
} from "../data/portfolioData.js";

import kaamonImage from "../assets/images/kaamon-preview.png";
import devroomsImage from "../assets/images/devrooms-preview.png";

import "../styles/projects.css";


const projectImages = {
  kaamon: kaamonImage,
  devrooms: devroomsImage,
};


function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}


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


function Projects() {
  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="container">

        <div className="projects-heading">

          <span className="projects-label">
            Projects
          </span>

          <div>
            <h2 className="projects-title">
              Selected work
              <span> I&apos;ve built.</span>
            </h2>

            <p className="projects-intro">
              A selection of full-stack projects focused on
              solving practical problems and building useful
              digital experiences.
            </p>
          </div>

        </div>


        <div className="projects-list">

          {projectsData.map((project, index) => (

            <article
              className={`project ${
                index % 2 !== 0
                  ? "project-reverse"
                  : ""
              }`}
              key={project.id}
            >

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-preview"
                aria-label={`Open ${project.name} live website`}
              >

                <img
                  src={projectImages[project.image]}
                  alt={`${project.name} website preview`}
                />

                <span className="project-preview-arrow">
                  <ArrowIcon />
                </span>

              </a>


              <div className="project-content">

                <div className="project-number">
                  0{project.id}
                </div>

                <span className="project-label">
                  {project.label}
                </span>

                <h3 className="project-name">
                  {project.name}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>


                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>


                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon />

                    GitHub
                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Website

                    <ArrowIcon />
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}


export default Projects;