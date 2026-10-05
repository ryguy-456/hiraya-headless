import AuroraFlow from './AuroraFlow'

function Hero() {
  return (
    <section className="hiraya-hero hiraya-aurora-hero">

      <AuroraFlow />

      <div className="hiraya-aurora-overlay" aria-hidden="true" />

      <div className="hiraya-container">
        <div className="hiraya-hero__content">

          <p className="hiraya-hero__eyebrow">
            Drupal Developer · Web Experience Specialist
          </p>

          <h1 className="hiraya-hero__title">
            Ryan Buenconsejo
          </h1>

          <p className="hiraya-hero__lead">
            Building accessible, scalable Drupal experiences for organizations
            that need reliable digital platforms.
          </p>

          <div className="hiraya-hero__actions">

            <a
              href="#projects"
              className="hiraya-button hiraya-button--primary"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="hiraya-button hiraya-button--secondary"
            >
              Contact Me
            </a>

          </div>
        </div>

        <div className="hiraya-hero__visual" aria-hidden="true">
          <div className="hiraya-hero__card">

            <span className="hiraya-hero__card-label">
              DRUPAL 11
            </span>

            <span className="hiraya-hero__card-line" />

            <span className="hiraya-hero__card-code">
              &lt;/&gt;
            </span>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
