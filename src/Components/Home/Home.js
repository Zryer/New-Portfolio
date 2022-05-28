import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Home.css';

const Home = () => {

    return (
        <Container className="homeContainer" id="Home" fluid>
            <Row>
                <Col>
                    <span className="homeSpan">Hi, my name is </span> <br className="breakWord" /><span className="homeSpanName">Zachary Fisher</span><span className="homeSpan">.</span> <br /> <span className="homeSpan">I'm a Full-Stack Developer.</span>
                </Col>
            </Row>
            <Row>
                <Col className="contactButtons">
                    <Button className="homeButton" size="lg" style={{ backgroundColor: "#333", border: "none", borderRadius: "50px" }} href="https://github.com/Zryer" target="_blank"><FontAwesomeIcon icon={faGithub} className="buttonIcon" style={{ color: "#FFF", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
                    <Button className="homeButton" size="lg" style={{ backgroundColor: "#0A66C2", border: "none", borderRadius: "50px" }} href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="buttonIcon" style={{ color: "#FFF", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
                    <Button className="homeButton" size="lg" style={{ backgroundColor: "#D5DBDB", border: "none", borderRadius: "50px" }} href="#" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpen} className="buttonIcon" style={{ color: "#34495E", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
                </Col>
            </Row>
            <Row>
                <Col id="secondRowButtons">
                    <Button href="#Projects" className="secondRowButtons homeButton">Some of my projects!</Button>
                    <Button href="#" className="secondRowButtons homeButton">Download my resume</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home