import React from 'react';
import './styles/Home.css'
import { Heading, Box, Divider, Button } from '@dracula/dracula-ui';
import { Link } from 'react-router-dom';

export default function Home() {

  return(
    <>
      <Box id='pageHeading'  width="auto">
        <Divider />
          <Heading color="purpleCyan" size='2xl' align='center'>Hello, World!</Heading> 
          <Heading color="yellowPink" size='2xl' align='center'>I'm Giuseppe Gelardi   </Heading>
        <Divider />
          <Heading color="pink" size='xl' align='left' m="xs" p="sm">I'm a full-stack software developer</Heading>
          <Heading color="purple" size='xl' align='right' p="sm">And an industrial engineer</Heading>
        <Divider/>
      </Box>
    </>
  )
}