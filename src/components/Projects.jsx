function Projects() {
  return (
    <section id="projects" className="hiraya-section hiraya-projects">
      <div className="hiraya-container">

        <div className="hiraya-section-heading">
          <p className="hiraya-section-eyebrow">Projects</p>

          <h2 className="hiraya-section-title">
            A few things I've built.
          </h2>

          <p className="hiraya-projects__intro">
            A selection of Drupal, front-end, and development work demonstrating
            practical experience across CMS development, custom theming, and
            modern web applications.
          </p>
        </div>

        <div className="hiraya-projects__grid">

          {/* HIRAYA */}
          <article className="hiraya-project-card">

            <div className="hiraya-project-card__top">
              <span className="hiraya-project-card__number">01</span>

              <span className="hiraya-project-card__type">
                Drupal 11
              </span>
            </div>

            <h3 className="hiraya-project-card__title">
              HIRAYA
            </h3>

            <p className="hiraya-project-card__description">
              A custom Drupal 11 portfolio theme built from the ground up with
              Twig, CSS, reusable components, responsive layouts, and
              accessibility-focused design.
            </p>

            <div className="hiraya-project-card__tags">
              <span>Drupal 11</span>
              <span>Twig</span>
              <span>CSS</span>
              <span>DDEV</span>
              <span>Git</span>
            </div>

          </article>

          {/* CONTENTFLOW */}
          <article className="hiraya-project-card">

            <div className="hiraya-project-card__top">
              <span className="hiraya-project-card__number">02</span>

              <span className="hiraya-project-card__type">
                React
              </span>
            </div>

            <h3 className="hiraya-project-card__title">
              ContentFlow
            </h3>

            <p className="hiraya-project-card__description">
              A modern content management dashboard built with React and Vite,
              featuring dashboard navigation, search, modal interfaces, and a
              responsive application layout.
            </p>

            <div className="hiraya-project-card__tags">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>GitHub</span>
              <span>Vercel</span>
            </div>

          </article>

          {/* DEVELOPER INFO */}
          <article className="hiraya-project-card">

            <div className="hiraya-project-card__top">
              <span className="hiraya-project-card__number">03</span>

              <span className="hiraya-project-card__type">
                Drupal Module
              </span>
            </div>

            <h3 className="hiraya-project-card__title">
              Developer Info
            </h3>

            <p className="hiraya-project-card__description">
              A custom Drupal module demonstrating Drupal development concepts
              including routing, controllers, custom functionality, and
              integration with the Drupal platform.
            </p>

            <div className="hiraya-project-card__tags">
              <span>PHP</span>
              <span>Drupal</span>
              <span>Custom Module</span>
              <span>Drush</span>
              <span>Composer</span>
            </div>

          </article>

        </div>

        <div className="hiraya-projects__cta">
          <a
            className="hiraya-button hiraya-button--primary"
            href="https://ryanbuenconsejo.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Drupal Work →
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
