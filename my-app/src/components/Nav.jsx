import React, { Component } from 'react';
import Brand from "./Brand.jsx"
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap';

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
        if (currentScroll > this.navRef.current.style.height) this.setState({bgColor: "#581c0c"})
        else if (this.state.bgColor != "transparent" && !(this.isToggled)) this.setState({bgColor: "transparent"});
    }
    handleClick(){
        if (this.state.bgColor === "transparent") this.setState({bgColor: "#581c0c"});
        this.isToggled = (this.isToggled) ? false:true;
    }
    render() {
        const navRef = this.navRef; 
        const bgColor = this.state.bgColor;
    
        return (  
            <Navbar expand="md" className="fixed-top" ref={navRef} style={{background: bgColor}}>
                <Container>
                <Brand url="./style/homeWallpaper.jpg"/>
                <Navbar.Brand href="#home">VLife</Navbar.Brand>
                <Navbar.Toggle onClick={this.handleClick} aria-controls="basic-navbar-nav" />
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