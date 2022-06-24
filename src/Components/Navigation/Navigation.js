import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import Logo from '../../Assets/Images/Logo.webp';
import './Navigation.css';

const Navigation = () => {

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" style={{backgroundColor: "#222733"}}>
      <Container fluid>
      <Navbar.Brand style={{padding: " 1vw 0 1vw 1vw", cursor: "pointer"}} href="#Home"><Image src={Logo} style={{height: "50px", width: "50px"}} alt="logo" /></Navbar.Brand>
      <Navbar.Toggle style={{backgroundColor: "#FE6F27"}} />
      <Navbar.Collapse style={{justifyContent: "flex-end"}}>
        <Nav style={{padding: " 1vw 1vw 1vw 0"}}>
        <Nav.Link className="navigationLink" href="#About">About</Nav.Link>
        <Nav.Link className="navigationLink" href="#Projects">Projects</Nav.Link>
        <Nav.Link className="navigationLink" href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation