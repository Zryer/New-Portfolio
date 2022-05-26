import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Contact.css';

const Contact = () => {
  return (
    <Container fluid id="Contact" className="contactContainer">
    <Row>
      <Col>
        <h1 style={{color: ""}}>Contact</h1>
      </Col>
    </Row>
    </Container>
  )
}

export default Contact;