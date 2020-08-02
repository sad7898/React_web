import React, { Component } from 'react';
import Brand from "./brand.jsx"
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap';
import {
    Link,
  } from "react-router-dom";
import $ from 'jquery';

class Bar extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrollTop: 0,
            bgColor: "transparent"
        }
        this.navRef = React.createRef();
        this.handleWindowScroll = this.handleWindowScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.isToggled = false;
    }
    componentDidMount(){
        let root = document.getElementById("root");
        console.log(this.navRef.current.style.height);
        root.addEventListener('scroll',this.handleWindowScroll);
    }
    handleWindowScroll(){
        let currentScroll =document.getElementById("root").scrollTop;
        if (currentScroll > this.navRef.current.style.height) this.setState({bgColor: "#8d6262"})
        else if (this.state.bgColor != "transparent" && !(this.isToggled)) this.setState({bgColor: "transparent"});
    }
    handleClick(){
        if (this.state.bgColor === "transparent") this.setState({bgColor: "#8d6262"});
        this.isToggled = (this.isToggled) ? false:true;
    }
    render() {
        const navRef = this.navRef; 
        const bgColor = this.state.bgColor;
    
        return (  
            <Navbar expand="md" className="fixed-top" ref={navRef} style={{background: bgColor}}>
                <Container>
                <Brand url="./style/homeWallpaper.jpg"/>
                <Link to="/"><Navbar.Brand>VLife</Navbar.Brand></Link>
                <Navbar.Toggle onClick={this.handleClick} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto w-100">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/link" className="nav-link">Link</Link>
                        <Link to="/forum" className="nav-link">Forum</Link>
                        <span className="link-wrap-up">
                            <Link className="nav-link nav-right" to="/contact">Contact</Link>
                            <Link className="nav-link nav-right" to="/about">About</Link>
                            <Link className="nav-link nav-right last" to="/signup">Sign Up</Link>
                        </span>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
 
export default Bar;