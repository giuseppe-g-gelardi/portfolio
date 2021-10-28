import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Box, Anchor, Text, Heading, Card } from '@dracula/dracula-ui';
import { Link } from 'react-router-dom';
import './styles/Projects.css'

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
      {/* <Box align='center' p='md' scrollbar='purple' height='md' width='4xl' display='inline-block'> */}
      <Card as='div' variant='subtle' scrollbar='purple' height='md'>
      <Table  variant='striped'>
        <thead>
          <tr>
            <th className="drac-text drac-text-white">
              Repo Name
            </th>
            <th className="drac-text drac-text-white" >
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {arrayItems.map((val, key) => {
            return (
              <tr key={key}>
                <td 
                  className="drac-text drac-text-white">
                    <Text color='cyanGreen'>{val.name}</Text>
                </td>
                <td 
                  className="drac-text drac-text-white" >
                  <Link 
                  style={{textDecoration: 'none'}}>
                    <Anchor color='yellowPink'
                      className='project-links'
                      hoverColor='pinkPurple'>{val.url}</Anchor>
                  </Link>
                </td>
              </tr>

            )
          })}
        </tbody>
      </Table>
      </Card>

      {/* </Box> */}
    </>
   );
}