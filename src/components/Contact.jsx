function Contact() {
  return (
    <section id="contact" className="hiraya-section hiraya-contact">
      <div className="hiraya-container">

        <div className="hiraya-contact__card">

          <div className="hiraya-contact__content">

            <p className="hiraya-section-eyebrow">
              Let's Connect
            </p>

            <h2 className="hiraya-contact__title">
              Have a Drupal project or opportunity?
            </h2>

            <p className="hiraya-contact__text">
              I'm interested in opportunities where I can contribute to
              reliable, accessible, and maintainable digital experiences.
            </p>

            <div className="hiraya-contact__actions">

              <a
                href="mailto:ryan.buenconsejo@gmail.com"
                className="hiraya-button hiraya-button--light"
              >
                Email Me
              </a>

              <a
                href="https://github.com/ryguy-456"
                className="hiraya-button hiraya-button--outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ryan-buenconsejo/"
                className="hiraya-button hiraya-button--outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>

          <div className="hiraya-contact__mark" aria-hidden="true">
            <span>&lt;/&gt;</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
