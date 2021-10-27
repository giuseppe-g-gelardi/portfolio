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


// // navbar example
// {/* <nav id="mainNavbar" class="navbar navbar-dark navbar-expand-md py-0 fixed-top">
//         <a href="#" class="navbar-brand">CANDY</a>
//         <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navLinks">
//             <ul class="navbar-nav">
//                 <li class="nav-item">
//                     <a href="" class="nav-link">HOME</a>
//                 </li>
//                 <li class="nav-item">
//                     <a href="" class="nav-link">ABOUT</a>
//                 </li>
//                 <li class="nav-item">
//                     <a href="" class="nav-link">TICKETS</a>
//                 </li>
//             </ul>
//         </div>
//     </nav> */}






// current

//     <nav id="mainNavbar" className='navbar navbar-dark navbar-expand-md bg-dark mb-4'>
//     <div className='container-fluid'>
//       <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//         <Link to='/' className='navbar-brand'>
//           Hello...
//         </Link>

//         <ul className='navbar-nav mr-auto'>
      
//           <li className='nav-item active'>
//             <Link to='/about' className='nav-link'>
//               About
//             </Link>
//           </li>
       
//           <li className='nav-item active'>
//             <Link to='/projects' className='nav-link'>
//               Projects
//             </Link>
//           </li>

//           <li className='nav-item active'>
//             <Link to='/contact' className='nav-link'>
//               Contact
//             </Link>
//           </li>
      
//         </ul>
//       </div>
//     </div>
//     </nav>