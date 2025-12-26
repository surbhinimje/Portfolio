import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import SN from "../images/SN.png";




const Navigationbar = () => {
    return (
     <>
            
           <Navbar collapseOnSelect fill expand="lg" className="px-5 navbar-white" fixed="top">
           <Container fluid>
            <Navbar.Brand  to="/" >
            <a href="/"><img src={SN} width="40px" height="40px" /></a>{" "}
              <a href="/" className="navbar-name">Surbhi Nimje</a>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto" >
            <Nav.Item className="px-3">
                <Nav.Link 
                  href="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-3"> 
                <Nav.Link  
                  href="#about"
                  activeStyle={{ color: 'black' }}
                >
                    About
                </Nav.Link>
                </Nav.Item>

                <Nav.Item className="px-3">
                <Nav.Link 
                  href="#work" 
                  activeStyle={{ color: 'black' }}
                >
                    Work
                </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                <Nav.Link  
                  href="#resume" 
                  activeStyle={{ color: 'black' }}
                >
                    Resume
                </Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                <Nav.Link  
                  href="#contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </Nav.Link>
                </Nav.Item>
               
                </Nav> 
                </Navbar.Collapse>
                </Container>
                </Navbar>
              
          
        </>
    );
};
export default Navigationbar;