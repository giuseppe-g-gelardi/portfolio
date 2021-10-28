import React from 'react';
import './styles/Home.css'
import { Heading, Box, Divider } from '@dracula/dracula-ui';
import headshot from '../images/headshot.jpg'

export default function Home(props) {
  return(
    <>
      <Box id='pageHeading'  width="auto">
        <Divider />
          <Box align='center' className="avatarBox">
            <div className='circular-landscape'>
              <img src={headshot} alt=''/>
            </div>
          </Box>
        <Divider />
          <Heading color="purpleCyan" size='2xl' align='center'>Hello, World!</Heading> 
          <Heading color="yellowPink" size='xl' align='center' p='xs'>I'm Giuseppe Gelardi   </Heading>
        <Divider />
          <Heading color="pink" size='xl' align='left' m="xs" p="sm">I'm a full-stack software developer</Heading>
          <Heading color="purple" size='xl' align='right' p="sm">And an industrial engineer</Heading>
        <Divider/>
      </Box>
    </>
  )
}