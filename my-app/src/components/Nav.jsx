import React, { Component } from 'react';
import Brand from "./Brand.jsx"
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap';

import $ from 'jquery';

class Bar extends Component {
    render() { 
        return (  
            <Navbar expand="md" className="fixed-top">
                <Container>
                <Brand url="./style/homeWallpaper.jpg"/>
                <Navbar.Brand href="#home">VLife</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto w-100">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#forum">Forum</Nav.Link>
                    <span className="wrap-up">
                        <Nav.Link className="nav-right" href="#contact">Contact</Nav.Link>
                        <Nav.Link className="nav-right" href="#about">About</Nav.Link>
                        <Nav.Link className="nav-right last" href="#signup">Sign Up</Nav.Link>
                    </span>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
 
export default Bar;