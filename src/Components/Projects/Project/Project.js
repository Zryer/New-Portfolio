import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Project.css';

const Project = ({ PROJECTS }) => {
    return (
        <Container className="projectContainer">
            <Row>
                    {PROJECTS.map((arr) => {
                        return (
                            <Col key={arr.Id} className="projectCard" xs={12} lg={6}>
                            <Card>
                                <Card.Img className="cardImage" src={arr.Img} alt={arr.Alt} />
                                <Card.ImgOverlay>
                                    <Card.Body>
                                        <Card.Title>{arr.Name}</Card.Title>
                                        <Card.Text>{arr.Desc}</Card.Text>
                                        <Button href={arr.Code} target="_blank" id="codeButton">Code</Button>
                                        <Button href={arr.Live} target="_blank" id="liveButton">Live demo</Button>
                                    </Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    )
}

export default Project