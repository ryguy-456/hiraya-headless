

function Projects({ projects, t }) {
  const content = t.projects

  return (
    <section id="projects" className="hiraya-section hiraya-projects">
      <div className="hiraya-container">

        <div className="hiraya-section-heading">
          <p className="hiraya-section-eyebrow">
            {content.eyebrow}
          </p>

          <h2 className="hiraya-section-title">
            {content.title}
          </h2>

          <p className="hiraya-projects__intro">
            {content.description}
          </p>
        </div>

        <div className="hiraya-projects__grid">
          {projects.map((project, index) => (
            <article className="hiraya-project-card" key={project.id}>

              <div className="hiraya-project-card__top">
                <span className="hiraya-project-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="hiraya-project-card__type">
                  {project.type || content.projectType}
                </span>
              </div>

              <h3 className="hiraya-project-card__title">
                {project.title}
              </h3>

              <p className="hiraya-project-card__description">
                {project.description}
              </p>

            </article>
          ))}
        </div>

        <div className="hiraya-projects__cta">
          <a
            className="hiraya-button hiraya-button--primary"
            href="https://ryanbuenconsejo.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.viewWork} →
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
