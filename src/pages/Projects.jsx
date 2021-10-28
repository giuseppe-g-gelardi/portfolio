import React, { useState, useEffect } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import axios from 'axios';
// import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Table } from '@dracula/dracula-ui';

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
          // console.log(arrayItems)
        },
        err => {
          console.log(err)
        }
      )
    } catch (except) {
      console.log(except)
    }
  }


  // console.log(arrayItems)

  // console.log(arrayItems[1].name)
  // console.log(arrayItems[1].url)
  // console.log(arrayItems[1].commits_url)
    
  
  

  

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th className="drac-text drac-text-white">Repo Name</th>
            <th className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {arrayItems.map((val, key) => {
            return (
              <tr key={key}>
                <td className="drac-text drac-text-white">{val.name}</td>
                <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
                {val.url} 
                </td>
              </tr>

            )
          })}
          
          <tr>
        
          </tr>
          <tr>
      
          </tr>
          <tr>
       
          </tr>
        </tbody>
      </Table>
    </div>
   );
}






{/* <Table>
        <thead>
          <tr>
            <th className="drac-text drac-text-white">Repo Name</th>
            <th className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="drac-text drac-text-white">{arrayItems[0].name}</td>
            <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
            {arrayItems[0].url} 
            </td>
          </tr>
          <tr>
            <td className="drac-text drac-text-white">Nadja</td>
            <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
              Nadja was very disadvantaged during her human life. 
            </td>
          </tr>
          <tr>
            <td className="drac-text drac-text-white">Laszlo</td>
            <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
              As a human, 
            </td>
          </tr>
          <tr>
            <td className="drac-text drac-text-white">Colin</td>
            <td className="drac-text drac-text-white" style={{ maxWidth: 200 }}>
              As an energy vampire, 
            </td>
          </tr>
        </tbody>
      </Table> */}