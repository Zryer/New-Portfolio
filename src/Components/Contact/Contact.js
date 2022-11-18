import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <Container fluid id="Contact" className="contactContainer">
      <Row>
        <Col>
          <h1 style={{ color: "", textAlign: "center" }}>Contact</h1>
        </Col>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center"}}>
        <Col xs={12} md={8}>
          <Form action="https://formspree.io/f/xjvllrey" method="POST" encType="multipart/form-data" target="_blank">
            <Row style={{ marginBottom: "2rem" }}>
              <Col xs={12} className="formInputs">
                <FloatingLabel label="Name" className="label">
                  <Form.Control className="formData" required type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </FloatingLabel>
              </Col>
              <Col xs={12} className="formInputs">
                <FloatingLabel label="Email" className="label">
                  <Form.Control className="formData" required type="email" id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </FloatingLabel>
              </Col>
              <Col xs={12} className="formInputs">
                <FloatingLabel label="Message" className="label">
                  <Form.Control className="formData" required type="text" id="message" name="message" as="textarea" placeholder="Enter Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </FloatingLabel>
              </Col>
            </Row>
            <Button type="submit" className="formButton" as={Col} xs={12}>
              SUBMIT
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="contactButtons" style={{ marginBottom: "1rem" }}>
          <Button className="homeButton" aria-label="Github" size="lg" style={{ backgroundColor: "#333", border: "none", borderRadius: "50px" }} href="https://github.com/Zryer" target="_blank"><FontAwesomeIcon icon={faGithub} className="buttonIcon" style={{ color: "#FFF", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
          <Button className="homeButton" aria-label="Linkedin" size="lg" style={{ backgroundColor: "#0A66C2", border: "none", borderRadius: "50px" }} href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="buttonIcon" style={{ color: "#FFF", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
          <Button className="homeButton" aria-label="Email" size="lg" style={{ backgroundColor: "#D5DBDB", border: "none", borderRadius: "50px" }} href="mailto:zacharyfisher808@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpen} className="buttonIcon" style={{ color: "#34495E", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;