import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Anchor, Text, Heading, Paragraph } from '@dracula/dracula-ui';
import { Link } from 'react-router-dom';
import './styles/Projects.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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

  // const dracColors = ['cyan', 'green', 'orange', 'pink', 'purple', 'red', 'yellow', 'white']
  // function displayColor(colors) {
  //   colors.map((color) => {
  //     return color
  //   })
    
  // }
 

  // const dracHoverColors = [
  //   'purpleCyan', 'yellowPink', 'cyanGreen', 'pinkPurple'
  // ]
  // function displayHoverColors(colors) {
  //   colors.map((color) => {
  //     return color
  //   })
  // }

  return (
    <>
    <Box align='center' p='lg'>
      <Heading>
        Here are some of my projects
      </Heading>
    </Box>
    <Box scrollbar='purple' height='md' id='table-box'>
      <Table>
        <Thead>
          <Tr>
            <Th className="drac-text drac-text-white">
              Repo Name
            </Th>
            <Th className="drac-text drac-text-white" >
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
                    <Anchor color='yellowPink'
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
    </>
   );
}