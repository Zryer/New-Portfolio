import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project/Project';
import { PROJECTS } from '../../Assets/PROJECTS';

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Project PROJECTS={PROJECTS}></Project>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;