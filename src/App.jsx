import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Achievments from './components/Achievments';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Intro />
    <AboutMe id="about"/>
    <Skills id="skills"/>
    <Projects id="projects"/>
    <Achievments id="achievments"/>
    <ContactMe id="cobtact"/>
    <Footer />
    </>
  )
}

export default App;
