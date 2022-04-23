import React, { useState } from 'react';

import { Link } from 'react-router-dom';


import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar"

import "./Navbar.style.scss"

import darkLogo from "../../assets/img/logo-en.png"
import Logo from "../../assets/img/logo-en-light.png"
const CNavbar = () => {
    const [navState, setNavState] = useState(false)
    document.addEventListener("scroll", e => {
        document.documentElement.scrollTop === 0 ? setNavState(false) : setNavState(true)
    })
    return (
        <Navbar bg={navState ? "dark" : "light"} expand="lg" className="navi px-4 " fixed="top">
            <Navbar.Brand as={Link} to="/">
                <img src={navState ? Logo : darkLogo} alt="Nejmy Logo" width="200" height="75" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {
                setNavState(!navState)
            }} />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="flex-grow-1 justify-content-end gap-5" >
                    <Nav.Link as={Link} className='custom-link text-primary h5' to="/Answers">Answers</Nav.Link>
                    <Nav.Link as={Link} className='custom-link text-primary h5' to="/Browse">Browse</Nav.Link>
                    <Nav.Link as={Link} className='custom-link text-primary h5' to="/Auth">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse >
        </Navbar >
    );
};

export default CNavbar;
