import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project/Project';
import { PROJECTS } from '../../Assets/PROJECTS';

const Projects = () => {
  return (
    <Container id="Projects">
      <Row>
        <Col>
          <h1 style={{ color: "white"}}>Projects</h1>
          <Project PROJECTS={PROJECTS}></Project>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;