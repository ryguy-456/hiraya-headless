
function Contact({ t }) {
  const content = t.contact

  return (
    <section id="contact" className="hiraya-section hiraya-contact">
      <div className="hiraya-container">

        <div className="hiraya-contact__card">

          <div className="hiraya-contact__content">

            <p className="hiraya-section-eyebrow">
              {content.eyebrow}
            </p>

            <h2 className="hiraya-contact__title">
              {content.title}
            </h2>

            <p className="hiraya-contact__text">
              {content.description}
            </p>

            <div className="hiraya-contact__actions">

              <a
                href="mailto:ryan.buenconsejo@gmail.com"
                className="hiraya-button hiraya-button--light"
              >
                {content.email}
              </a>

              <a
                href="https://github.com/ryguy-456"
                className="hiraya-button hiraya-button--outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.github}
              </a>

              <a
                href="https://www.linkedin.com/in/ryan-buenconsejo/"
                className="hiraya-button hiraya-button--outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.linkedin}
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
