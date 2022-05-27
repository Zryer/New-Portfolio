import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Contact.css';

const Contact = () => {
  return (
    <Container fluid id="Contact" className="contactContainer">
    <Row>
      <Col>
        <h1 style={{color: ""}}>Contact</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="name">First and last name</Form.Label>
            <Form.Control type="text" id="name" name="name" placeholder="Enter Name" />
            <Form.Text>Please enter both first and last name.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control type="email" id="email" name="email" placeholder="Enter Email" />
            <Form.Text>Please enter your email address.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control type="text" id="message" name="message" as="textarea" placeholder="Enter Message" />
            <Form.Text>Leave a kind message or constructive feedback!</Form.Text>
          </Form.Group>
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
    </Container>
  )
}

export default Contact;