import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project/Project';

import './Projects.css';

const Projects = () => {
  return (
    <Container id="Projects" className="projectsContainer">
      <Row>
        <Col>
          <h1 style={{ color: "white", textAlign: "center"}} className="projectsTitle">Recent Projects</h1>
          <Project></Project>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;