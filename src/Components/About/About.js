import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICONS } from '../../Assets/ICONS';

import './About.css';

const About = () => {
  return (
    <Container fluid id="About" className="aboutContainer">
      <Row>
        <Col className="aboutTitle" xs={12}>
          <h1>Full-Stack Developer | Nucamp Bootcamp Graduate</h1>
        </Col>
        <Col className="aboutContent" xs={12}>
          <Container>
            <Row>
              <Col>
                <p className="aboutContentParagraph">Hello! My name is Zachary and I enjoy building projects and learning about web development. I graduated from Nucamp Coding Bootcamp where I learned the skills of a Full-Stack Developer.</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="aboutTitle" xs={12}>
          <h1>Skills</h1>
        </Col>
        <Col className="skillsContent" xs={12}>
          <Container>
            <Row>
              {ICONS.map((arr) => {
                return (
                  <Col key={arr.id} xs={4} sm={3} className="icons">
                    <FontAwesomeIcon icon={arr.icon} style={{ fontSize: "3rem", color: `${arr.color}` }} />
                    <h6>{arr.tag}</h6>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default About;