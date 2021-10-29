import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Anchor, Text, Heading, Paragraph, Divider } from '@dracula/dracula-ui';
import { Link } from 'react-router-dom';
import './styles/Projects.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import alice from '../images/keyboards/alice60.png'
import bolsalice from '../images/keyboards/bolsalice.png'
import bolsapad from '../images/keyboards/bolsapad.png'
import deco from '../images/keyboards/deco.png'

import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'


export default function Projects() {

  const [arrayItems, setArrayItems] = useState([]);

  useEffect(() => {
    getRepos()
  }, [])
  const getRepos = async () => {
    try {
      axios.get('https://api.github.com/users/giuseppe-g-gelardi/repos').then(
        response => {
          setArrayItems(response.data)
        },
        err => {
          console.log(err)
        }
      )
    } catch (except) {
      console.log(except)
    }
  }


  return (
    <>
    <Box align='center' p='lg'>
      <Heading>
        Here are some of my projects
      </Heading>
    </Box>
    <Box>
      <Heading align='center'>
        <Paragraph>
          Here is a list of all the projects I currently have on GitHub. <br/>
          Feel free to check some out!
        </Paragraph>
      </Heading>
    </Box>
    <Box scrollbar='purple' height='xxs' id='table-box'>
      <Table>
        <Thead>
          <Tr>
            <Th className="drac-text drac-text-white">
              Repo Name
            </Th>
            <Th className="drac-text drac-text-white">
              Link
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {arrayItems.map((val, key) => {
            return (
              <Tr key={key}>
                <Td 
                  className="drac-text drac-text-white">
                    <Text color='cyanGreen'>{val.name}</Text>
                </Td>
                <Td 
                  className="drac-text drac-text-white" >
                  <Link
                  style={{textDecoration: 'none'}}>
                    <Anchor 
                      color='yellowPink'
                      className='project-links'
                      hoverColor='pinkPurple'>{val.url}</Anchor>
                  </Link>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      </Box>
      <Box>
      </Box>;

      <Box>
        <Box mb="sm">
          <Divider color="cyan" />
          <Divider color="green" />
          <Divider color="orange" />
          <Divider color="pink" />
          <Divider color="purple" />
          <Divider color="red" />
          <Divider color="yellow" />
        </Box>
      </Box>
      <Box>
        <Heading align='center'>
          As an industrial engineer, I design custom mechanical keyboards.
        </Heading>
        <Paragraph align='center'>
          ... here are a few examples!
        </Paragraph>
      </Box>

      <Box>
        <Carousel interval={20000}>
          <Carousel.Item>
            <img className='d-dblock w-100' src={alice} alt='' />
            <Carousel.Caption>
              <Heading>
                Calise
              </Heading>
              <Paragraph>
                A 60% Alice style keyboard with smooth cherry lip and 2x 3u spacebars
              </Paragraph>
            </Carousel.Caption>
          </Carousel.Item>




        </Carousel>
      </Box>
    </>
   );
}