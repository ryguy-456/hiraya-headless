
import { useEffect, useState } from 'react'
import LanguageToggle from './LanguageToggle'

function ReactNav({ language, setLanguage, t }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`react-nav ${scrolled ? 'react-nav--scrolled' : ''}`}>
      <div className="react-nav__inner">

        <a href="#" className="react-nav__brand">
          RB
        </a>

        <div className="react-nav__links">
          <a href="#about">{t.nav.about}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#projects">{t.nav.projects}</a>
        </div>

        <div className="react-nav__actions">
          <LanguageToggle
            language={language}
            setLanguage={setLanguage}
          />

          <a href="#contact" className="react-nav__contact">
            {t.nav.contact}
          </a>
        </div>

      </div>
    </nav>
  )
}

export default ReactNav
