import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
      <Container id="About" style={{ height: "100vh", backgroundColor: "orange" }}>
        <Row>
          <Col>
              <h1 style={{color: "white"}}>Hello</h1>
          </Col>
        </Row>
      </Container>
  )
}

export default About