import React from 'react';
import { 
  AiFillGithub, 
  AiOutlineInstagram, 
  AiFillFacebook, 
  AiOutlineLinkedin
  } from 'react-icons/ai'

export default function Contact() {
  return(
    <>
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        <li className='nav-item active'>
          <a href='https://github.com/giuseppe-g-gelardi' className='nav-link'>
            {' '}
            <AiFillGithub size={70}/>
          </a>
        </li>

        <li className='nav-item active'>
          <a href='https://www.instagram.com/giuseppe.g.gelardi/' className='nav-link'>
            {' '}
            <AiOutlineInstagram size={70} />
          </a>
        </li>

        <li className='nav-item active'>
          <a href='https://www.linkedin.com/in/giuseppe-gelardi/' className='nav-link'>
            {' '}
            <AiOutlineLinkedin size={70} />
          </a>
        </li>

        <li className='nav-item active'>
          <a href='https://www.facebook.com/giuseppe.gelardi.1612' className='nav-link'>
            {' '}
            <AiFillFacebook size={70} />
          </a>
        </li>
      </ul>
    </>
  )
}