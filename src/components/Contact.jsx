import React from "react";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from "react-awesome-reveal";

function Contact(){
    const social=[
        {
            icon:<FaGithub size="50px"/>,
            url:"https://github.com/surbhinimje",
            text:"github.com/surbhinimje",
        },
        {
            icon:<FaLinkedin size="50px"/>,
            url:"https://linkedin.com/in/surbhi-nimje/",
            text:"linkedin.com/in/surbhi-nimje",
        },
        {
            icon:<FaEnvelope size="50px"/>,
            url:"mailto:surbhi.nimje@gmail.com",
            text:"surbhi.nimje@gmail.com",
        }
    ];
    return (<div id="contact">
    <h1>Get In Touch With Me</h1>
    <Container className="contact-link">
     
     
   <Fade cascade>
   <Row className="g-4">
    {social.map((contact,k)=>(
        <Col key={k} xs={12} md={6} lg={4}>
        <a href={contact.url} className="pad-container">{contact.icon}</a>
       <Col></Col>
        <a href={contact.url} className="pad-container">{" "+contact.text}</a>
        </Col>
    ))}
    </Row>
    </Fade>
    </Container>
    </div>)
}
export default Contact;