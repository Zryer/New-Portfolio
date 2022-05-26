import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Logo from '../../Assets/Images/Logo.png';
import './Navigation.css';

const Navigation = () => {
  
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Container fluid>
      <Navbar.Brand style={{padding: " 1vw 0 1vw 1vw", cursor: "pointer"}} href="#Home"><Image src={Logo} style={{height: "50px", width: "50px"}} /></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse style={{justifyContent: "flex-end"}}>
        <Nav style={{padding: " 1vw 1vw 1vw 0"}}>
        <Nav.Link className="navigationLink" href="#About">About</Nav.Link>
        <Nav.Link className="navigationLink" href="#Projects">Projects</Nav.Link>
        <Nav.Link className="navigationLink" href="#Contact">Contact</Nav.Link>
        <Button className="navigationLink" size="lg" style={{ backgroundColor: "#E67E22", border: "none", borderRadius: "", margin: "0", paddingLeft: ".5rem", paddingRight: ".5rem", fontSize: "1.5rem" }} href="https://www.youtube.com/watch?v=gnV-8pkILF0&ab_channel=Proximity" target="_blank">Resume</Button>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation