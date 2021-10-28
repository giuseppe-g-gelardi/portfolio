import React from 'react';
import { Link } from 'react-router-dom';
import './styles/nav.css'


// bg-dark
export default function Navigation() {
  return(
      <nav id="mainNavbar" className="navbar navbar-dark bgdrac navbar-expand-md py-4" 
      >
         <Link to="/portfolio" id="brand" className='navbar-brand'>Giuseppe Gelardi</Link>

          <button className="navbar-toggler" 
                  data-toggle="collapse" 
                  data-target="#navLinks">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav">

              <li className='nav-item' id='nav-item-about'>
                <Link to='/about' className='nav-link active'>About</Link>
              </li>
       
              <li className='nav-item' id='nav-item-projects'>
                <Link to='/projects' className='nav-link active'>Projects</Link>
              </li>

              <li className='nav-item' id='nav-item-contact'>
                <Link to='/contact' className='nav-link active'>Contact</Link>
              </li>

            </ul>
          </div>
      </nav>
  )
}