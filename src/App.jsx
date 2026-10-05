import './hiraya.css'
import './react-theme.css'

import ReactNav from './components/ReactNav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Toolkit from './components/Toolkit'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ReactNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Toolkit />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
