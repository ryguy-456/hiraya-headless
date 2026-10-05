import { useEffect, useState } from 'react'

function ReactNav() {
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
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        <a href="#contact" className="react-nav__contact">
          Contact Me
        </a>

      </div>
    </nav>
  )
}

export default ReactNav
