import React from 'react';
import { Anchor, Heading, Box, Divider } from '@dracula/dracula-ui';
import { 
  AiFillGithub, 
  AiOutlineInstagram, 
  AiFillFacebook, 
  AiOutlineLinkedin
  } from 'react-icons/ai'

export default function Contact() {
  return(
    <>
    <Box p='md'>
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        <li className='nav-item active'>
          <a href='https://github.com/giuseppe-g-gelardi' className='nav-link'>
            <Anchor 
              className='nav-link active'
              color='cyan'
              hoverColor='purple'>
               <AiFillGithub style={{textDecoration: "none"}} size={70} />
            </Anchor>
            <Heading>Check out my GitHub!</Heading>
            <Divider />


            
          </a>
        </li>

        <li className='nav-item active'>
          <a href='https://www.instagram.com/giuseppe.g.gelardi/' className='nav-link'>
            <Anchor 
              className='nav-link active'
              color='green'
              hoverColor='red'>
               <AiOutlineInstagram style={{textDecoration: "none"}} size={70} />
            </Anchor>
            <Heading>Follow me on Instagram!</Heading>
            <Divider />

          </a>
        </li>

        <li className='nav-item active'>
          <a href='https://www.linkedin.com/in/giuseppe-gelardi/' className='nav-link'>
      
            <Anchor 
              className='nav-link active'
              color='orange'
              hoverColor='yellow'>
               <AiOutlineLinkedin style={{textDecoration: "none"}} size={70} />
            </Anchor>
            <Heading>Add me on linked in!</Heading>
            <Divider />

            
          </a>
        </li>

        <li className='nav-item active'>
          <a href='https://www.facebook.com/giuseppe.gelardi.1612' className='nav-link'>
            <Anchor 
              className='nav-link active'
              color='pink'
              hoverColor='white'>
               <AiFillFacebook style={{textDecoration: "none"}} size={70} />
            </Anchor>
            <Heading>I cant believe were still using Facebook</Heading>
            <Divider />

          </a>
        </li>
      </ul>
      </Box>
    </>
  )
}