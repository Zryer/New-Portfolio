import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Logo from '../../Assets/Images/Logo.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand style={{padding: " 1vw 0 1vw 1vw"}}><Link className="navigationLink" to="/"><Image src={Logo} style={{height: "50px", width: "50px"}} /></Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse style={{justifyContent: "flex-end"}}>
        <Nav style={{padding: " 1vw 1vw 1vw 0"}}>
        <Nav.Link tabIndex={-1}><Link className="navigationLink" to="About">About</Link></Nav.Link>
        <Nav.Link tabIndex={-1}><Link className="navigationLink" to="Projects">Projects</Link></Nav.Link>
        <Nav.Link tabIndex={-1}><Link className="navigationLink" to="Contact">Contact</Link></Nav.Link>
        <Button className="navigationLink" size="lg" style={{ backgroundColor: "#E67E22", border: "none", borderRadius: "", margin: "0", paddingLeft: ".5rem", paddingRight: ".5rem", fontSize: "1.5rem" }} href="https://www.youtube.com/watch?v=gnV-8pkILF0&ab_channel=Proximity" target="_blank">Resume</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation