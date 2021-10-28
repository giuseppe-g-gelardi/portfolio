import React from 'react'
import './styles/Footer.css'
import { Text } from '@dracula/dracula-ui'

export default function Footer() {
  return(
    <>
      <footer className='footer'>
        <div className='container'>
          <Text className='text-muted' align='center'>&copy; 2021 Giuseppe Gelardi</Text>
        </div>
      </footer>
    </>
  )
}
