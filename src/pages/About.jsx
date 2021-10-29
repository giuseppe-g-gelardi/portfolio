import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Heading, Paragraph } from '@dracula/dracula-ui'
import portrait from '../images/portrait.jpg'
import sniperschool from '../images/sniperschool.jpg'

export default function About() {
  return (
    <Container fluid='md' justify className='about-container'>
      <Row className='justify-content-center' >
        <Col md='4'>
          <Image src={portrait} fluid />
        </Col>

        <Col md={{ span: 4, offset: 4 }}>
          
          <div id='about-right' className='col-lg-12 text-center' justify='center'>
            <Heading>Hi! My name is Giuseppe</Heading>
            <br />
            <Paragraph>I design high-end custom mechanical keyboards</Paragraph>
            <Paragraph>
              Currently I am transitioning to a career in web development and as
              you can see, CSS is the bane of my existence. Good thing I'm still
              really good at designing keyboards! :p
            </Paragraph>

          </div>
        </Col>
      </Row>
      <Row className='justify-content-center' >
        <Col md={4}>
          <div id='about-left' className='col-lg-12 text-center'>
            <Heading>Not too long ago though...</Heading>
            <br />
            <Paragraph>
              ... I was in the U.S. Army. I held a few positions like sniper
              team leader, fire-team leader and got to train new solders in
              arctic survival. I was also part of a special recon team that
              everyone was jealous of because we didn't have to shave or wear
              nametags. Although it was fun, I prefer programming and keyboards;
              it's easier on my knees
            </Paragraph>
          </div>
        </Col>

        <Col md={{ span: 4, offset: 4 }}>
          <Image src={sniperschool} fluid />
        </Col>
      </Row>
    </Container>
  )
}