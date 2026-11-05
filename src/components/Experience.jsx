
function Experience({ t }) {
  return (
    <section id="experience" className="hiraya-section hiraya-experience">
      <div className="hiraya-container">
        <div className="hiraya-section-heading">
          <p className="hiraya-section-eyebrow">
            {t.experience.eyebrow}
          </p>

          <h2 className="hiraya-section-title">
            {t.experience.title}
          </h2>
        </div>

        <div className="hiraya-experience__timeline">
          <article className="hiraya-experience__item">
            <div
              className="hiraya-experience__marker"
              aria-hidden="true"
            ></div>

            <div className="hiraya-experience__content">
              <div className="hiraya-experience__header">
                <div>
                  <p className="hiraya-experience__company">
                    National Rural Electric Cooperative Association
                  </p>

                  <h3 className="hiraya-experience__role">
                    {t.experience.role}
                  </h3>
                </div>

                <span className="hiraya-experience__dates">
                  2020–2025
                </span>
              </div>

              <p className="hiraya-experience__summary">
                {t.experience.summary}
              </p>

              <ul className="hiraya-experience__highlights">
                {t.experience.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>

              <div className="hiraya-experience__tags">
                <span>Drupal</span>
                <span>Twig</span>
                <span>PHP</span>
                <span>Pantheon</span>
                <span>WCAG 2.1 AA</span>
                <span>Section 508</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
