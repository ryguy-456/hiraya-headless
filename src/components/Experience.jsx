function Experience() {
  return (
    <section id="experience" className="hiraya-section hiraya-experience">
      <div className="hiraya-container">

        <div className="hiraya-section-heading">
          <p className="hiraya-section-eyebrow">
            Experience
          </p>

          <h2 className="hiraya-section-title">
            Building and supporting enterprise Drupal platforms.
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
                    Web Developer
                  </h3>
                </div>

                <span className="hiraya-experience__dates">
                  2020–2025
                </span>
              </div>

              <p className="hiraya-experience__summary">
                Developed and supported enterprise Drupal websites serving
                multiple cooperative organizations, with a focus on
                accessibility, content architecture, front-end implementation,
                and reliable deployment workflows.
              </p>

              <ul className="hiraya-experience__highlights">
                <li>
                  Developed and maintained Drupal 8, 9, and 10 websites across
                  approximately 10–12 cooperative sites.
                </li>

                <li>
                  Built and maintained content types, taxonomies, Views,
                  Webforms, custom blocks, Twig templates, and reusable
                  components.
                </li>

                <li>
                  Managed development, testing, QA, and production deployments
                  through Pantheon.
                </li>

                <li>
                  Applied WCAG 2.1 AA and Section 508 accessibility practices
                  throughout development and content implementation.
                </li>

                <li>
                  Collaborated with stakeholders, content teams, and project
                  partners to troubleshoot issues and deliver website updates.
                </li>

                <li>
                  Provided Tier 2 technical support and troubleshooting for
                  website and digital platform issues.
                </li>
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
