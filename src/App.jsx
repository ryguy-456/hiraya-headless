import AccessibilityWidget from './components/AccessibilityWidget'
import { useEffect, useState } from 'react'
import './hiraya.css'
import './react-theme.css'

import translations from './data/translations'

import ReactNav from './components/ReactNav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Toolkit from './components/Toolkit'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  const [projects, setProjects] = useState([])

  // Language state
  const [language, setLanguage] = useState('en')
  const t = translations[language]

console.log('About Spanish title:', translations.es.about?.title)
console.log('Current About title:', t.about?.title)

  useEffect(() => {
    fetch('https://dev-ryan-buenconsejo.pantheonsite.io/api/projects')
      .then((response) => response.json())
      .then((data) => {
        console.log('Drupal projects:', data)
        setProjects(data)
      })
      .catch((error) => {
        console.error('Error fetching Drupal projects:', error)
      })
  }, [])

  return (
    <>
      <ReactNav
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <Hero t={t} />
      <About t={t} />
      <Experience t={t} />
      <Skills />
      <Toolkit />
      <Projects projects={projects} />
      <Contact />
      <Footer />
      <Chatbot />
      <AccessibilityWidget />
    </>
  )
}

export default App