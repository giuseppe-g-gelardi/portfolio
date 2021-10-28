import React from 'react';
import '@dracula/dracula-ui/styles/dracula-ui.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer';
import './App.css'

export default function App() {
  return(
  <>
    <Router>
      <Navigation />
        <Switch>
          <Route path='/portfolio' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
    </Router>
    <Footer />
  </>
  )
}
