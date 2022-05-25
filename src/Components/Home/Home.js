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
        <Container className="homeContainer" fluid>
            <Row>
                <Col>
                    <div className="homeName">My name is <br className="breakWord" /><span style={{color: "#FE6F27" /* "#F39C12" */}}>Zachary Fisher</span>. <br /> <span className="secondText">I'm a Front-End Developer.</span></div>
                </Col>
            </Row>
            <Row>
                <Col id="homeButtons">
                    <Button className="homeButton" id="btn-1" size="lg" style={{ backgroundColor: "#333", border: "none", borderRadius: "50px" }} href="https://github.com/Zryer" target="_blank"><FontAwesomeIcon icon={faGithub} className="buttonIcon" style={{ color: "#FFF", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
                    <Button className="homeButton" id="btn-2" size="lg" style={{ backgroundColor: "#0A66C2", border: "none", borderRadius: "50px" }} href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="buttonIcon" style={{ color: "#FFF", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
                    <Button className="homeButton" id="btn-3" size="lg" style={{ backgroundColor: "#D5DBDB", border: "none", borderRadius: "50px" }} href="#" target="_blank"><FontAwesomeIcon icon={faEnvelopeOpen} className="buttonIcon" style={{ color: "#34495E", fontSize: "3rem", margin: "0 1rem 0 1rem" }} /></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home