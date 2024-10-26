import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Achievments from './components/Achievments';
import ContactMe from './components/ContactMe';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Intro />
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Achievments/>
    <ContactMe/>
    </>
  )
}

export default App;
