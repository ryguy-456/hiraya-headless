function About({ t }) {
console.log('ABOUT COMPONENT LANGUAGE:', t.about.title)


  return (
    <section id="about" className="hiraya-section hiraya-about">
      <div className="hiraya-container">

        <div className="hiraya-section-heading">
          <p className="hiraya-section-eyebrow">
            {t.about.eyebrow}
          </p>

          <h2 className="hiraya-section-title">
            {t.about.title}
          </h2>
        </div>

        <div className="hiraya-about__content">

          <p>{t.about.paragraph1}</p>

          <p>{t.about.paragraph2}</p>

          <br />

          <p>{t.about.paragraph3}</p>

        </div>

        <div className="hiraya-about__stats">

          <div className="hiraya-stat">
            <strong>7+</strong>
            <span>{t.about.stat1}</span>
          </div>

          <div className="hiraya-stat">
            <strong>Drupal 8–11</strong>
            <span>{t.about.stat2}</span>
          </div>

          <div className="hiraya-stat">
            <strong>WCAG / 508</strong>
            <span>{t.about.stat3}</span>
          </div>

          <div className="hiraya-stat">
            <strong>Pantheon</strong>
            <span>{t.about.stat4}</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About