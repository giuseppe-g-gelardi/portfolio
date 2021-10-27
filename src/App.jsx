import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
return(
  <>
    <Navbar />
    <h1>hi nebby!</h1>

    <About />
    <Contact />
    <Home />
    <Projects />
  </>
)
}

export default App