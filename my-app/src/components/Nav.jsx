import React, { useState, useEffect,useRef } from 'react';
import Brand from "./Brand.jsx"
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap';
import {
    Link,
  } from "react-router-dom";
import $ from 'jquery';
import {useSelector,useDispatch} from 'react-redux';
import {logOut} from '../store/actions/userActions.js';
import axios from 'axios';
const Bar = (props) => {
    let auth = useSelector(state => state.auth);
    let dispatch = useDispatch();
    let username = auth.user;
    let navRef = useRef();
    let [scrollTop,setScrollTop] = useState(0);
    let [bgColor,setBgColor] = useState("#8d6262");
    let isToggled = false;
    useEffect(() => {
        let root = document.getElementById("root");
        console.log(navRef.current.style.height);
        root.addEventListener('scroll',handleWindowScroll);
    },[])
    const handleWindowScroll = () =>{
                 let currentScroll =document.getElementById("root").scrollTop;
                 if (currentScroll > navRef.current.style.height) setBgColor("#8d6262")
                 else if (bgColor != "transparent" && !(isToggled)) setBgColor("transparent");
             }
    const handleClick = () =>{
                 if (bgColor === "transparent") setBgColor("#8d6262");
                 isToggled = (isToggled) ? false:true;
                }
    const handleLogOut = () => {
        axios.post('/user/signout')
        .then((res) => {
            dispatch(logOut());
        })
        .catch((err) => (console.log(err)))
    }

    return (
        <Navbar expand="md" className="fixed-top" ref={navRef} style={{background: bgColor}}>
                 <Container>
                 <Brand url="./style/homeWallpaper.jpg"/>
                 <Link to="/"><Navbar.Brand>VLife</Navbar.Brand></Link>
                 <Navbar.Toggle onClick={handleClick} aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto w-100">
                         <Link to="/" className="nav-link">Home</Link>
                         <Link to="/link" className="nav-link">Link</Link>
                         <Link to="/forum" className="nav-link">Forum</Link>
                         <span className="link-wrap-up">
                            {!auth.isAuthorized && <Link className="nav-link nav-right" to="/user/signin">Sign In</Link> }
                            {!auth.isAuthorized && <Link className="nav-link nav-right last" to="/user/signup">Sign Up</Link>}
                            { auth.isAuthorized && <Link className="nav-link nav-right" to="/user/dashboard">{username}</Link>}
                             { auth.isAuthorized && <Link className="nav-link nav-right last" to="/" onClick={handleLogOut}>Sign Out</Link>}
                             
                             
                         </span>
                     </Nav>
                 </Navbar.Collapse>
                 </Container>
             </Navbar>
    )
}
 
export default Bar;