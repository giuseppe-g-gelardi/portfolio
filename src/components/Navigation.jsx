import React from 'react';
import { Link } from 'react-router-dom';
import './styles/nav.css'

export default function Navigation() {
  return(
      <nav id="mainNavbar" className="navbar navbar-dark bg-dark navbar-expand-md">
         <Link to="/" id="brand" className='navbar-brand'>Giuseppe Gelardi</Link>

          <button className="navbar-toggler" 
                  data-toggle="collapse" 
                  data-target="#navLinks">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav">

              <li className='nav-item'>
                <Link to='/about' className='nav-link active'>About</Link>
              </li>
       
              <li className='nav-item'>
                <Link to='/projects' className='nav-link active'>Projects</Link>
              </li>

              <li className='nav-item'>
                <Link to='/contact' className='nav-link active'>Contact</Link>
              </li>

            </ul>
          </div>
      </nav>
  )
}