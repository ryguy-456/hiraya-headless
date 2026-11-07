
function Toolkit({ t }) {
  const toolkit = t.toolkit

  const icons = ['D', 'SDC', 'Twig', 'CLI', 'DDEV', 'Git']

  return (
    <section id="drupal-toolkit" className="hiraya-section hiraya-toolkit">
      <div className="hiraya-container">

        <div className="hiraya-section-heading">
          <p className="hiraya-section-eyebrow">
            {toolkit.eyebrow}
          </p>

          <h2 className="hiraya-section-title">
            {toolkit.title}
          </h2>

          <p className="hiraya-toolkit__intro">
            {toolkit.description}
          </p>
        </div>

        <div className="hiraya-toolkit__grid">
          {toolkit.items.map((item, index) => (
            <article
              className={`hiraya-toolkit-card ${
                index === 0 ? 'hiraya-toolkit-card--featured' : ''
              }`}
              key={item.title}
            >
              <div className="hiraya-toolkit-card__icon" aria-hidden="true">
                {icons[index]}
              </div>

              <div>
                {index === 0 && (
                  <p className="hiraya-toolkit-card__eyebrow">
                    {t.language === 'es' ? 'Destacado' : 'Featured'}
                  </p>
                )}

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {index === 0 && (
                  <div className="hiraya-toolkit-card__tags">
                    <span>Canvas</span>
                    <span>Components</span>
                    <span>Drupal 11</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Toolkit
