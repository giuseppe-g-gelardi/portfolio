import React from 'react';
import './styles/Home.css'
import { Heading, Box, Divider, Button } from '@dracula/dracula-ui';
import { Link } from 'react-router-dom';

export default function Home() {

  return(
    <>
      <Box id='pageHeading'  width="auto">
        <Heading color="purpleCyan" size='2xl' align='center'>Hello, World!</Heading> 
        <Heading color="yellowPink" size='2xl' align='center'>I'm Giuseppe Gelardi   </Heading>
          <Box mb="sm">
            <Divider />
          </Box>
        <Heading color="pink" size='xl' align='left'>I'm a full-stack software developer</Heading>
        <Heading color="purple" size='xl' align='right'>And an industrial engineer</Heading>
        <br />
        <Button as="a" href="/about" variant="ghost" color="purple" m='sm' size="md" style={{textDecoration: "none"}}>Enter</Button>;
      </Box>
    </>
  )
}