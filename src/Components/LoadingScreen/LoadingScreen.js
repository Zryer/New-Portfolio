import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import './LoadingScreen.css';


const LoadingScreen = () => {
    return (
        <Container style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Row>
                <Col>
                    <span className="loadAnimation" style={{ color: "orange" }}>Welcome to my page!</span>
                    <Spinner></Spinner>
                </Col>
            </Row>
        </Container>

    )
}

export default LoadingScreen