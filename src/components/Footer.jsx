function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="hiraya-footer">
      <div className="hiraya-container">

        <div className="hiraya-footer__inner">

          <div className="hiraya-footer__brand">
            <a href="/" className="hiraya-footer__logo">
              Ryan Buenconsejo
            </a>

            <p>
              Drupal Developer · Web Experience Specialist
            </p>
          </div>

          <nav className="hiraya-footer__nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>

        <div className="hiraya-footer__bottom">

          <span>
            © {currentYear} Ryan Buenconsejo
          </span>

          <span>
            Built with Drupal 11
          </span>

        </div>

      </div>
    </footer>
  )
}

export default Footer
