
function Footer({ t }) {
  const currentYear = new Date().getFullYear()
  const content = t.footer

  return (
    <footer className="hiraya-footer">
      <div className="hiraya-container">

        <div className="hiraya-footer__inner">

          <div className="hiraya-footer__brand">
            <a href="/" className="hiraya-footer__logo">
              Ryan Buenconsejo
            </a>

            <p>
              {content.tagline}
            </p>
          </div>

          <nav
            className="hiraya-footer__nav"
            aria-label={t.language === 'es' ? 'Navegación del pie de página' : 'Footer navigation'}
          >
            <a href="#about">{t.nav.about}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

        </div>

        <div className="hiraya-footer__bottom">

          <span>
            © {currentYear} Ryan Buenconsejo
          </span>

          <span>
            {content.rights}
          </span>

        </div>

      </div>
    </footer>
  )
}

export default Footer
