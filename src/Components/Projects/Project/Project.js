import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PROJECTS } from '../../../Assets/PROJECTS';

import './Project.css';

const Project = () => {

    return (
        <Container className="projectContainer">
            <Row>
                {PROJECTS.map((arr) => {
                    return (
                        <Col key={arr.Id} style={{ textAlign: "center", marginBottom: "1.5rem" }} xs={12} lg={6}>
                            <Card style={{ border: "none" }}>
                                <Card.Img src={arr.Img} alt={arr.Alt} />
                                <Card.Body>
                                    <Card.Title>{arr.Name}</Card.Title>
                                    <Card.Text>{arr.Desc}</Card.Text>
                                    <Col style={{ display: "flex", justifyContent: "space-evenly" }}>
                                        <Button href={arr.Code} target="_blank" style={{ width: "80px", color: "#FE6F27" }}>Code</Button>
                                        <Button href={arr.Live} target="_blank" style={{ width: "80px", color: "#FE6F27" }}>Live</Button>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Project