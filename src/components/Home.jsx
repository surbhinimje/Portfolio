import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import back from "../images/programmer.jpg";
import { Slide,Fade } from "react-awesome-reveal";

const Home = (props) => {


  return (
    
      <div id="home">
      <Container>
     
      <Row>
   
        <Col style={{padding:'8%'}}>
     
        <Fade cascade><h1  style={{fontSize:'100px'}}>Surbhi Nimje</h1>
      <p className="lead">Software Engineer & Front End Developer</p>
      <button className="pill"  href="#about">About Me</button>
      </Fade>
        </Col>
       
        <Col>
        <Fade cascade>
        <img src={back} width="500px" height="500px"/>
        </Fade>
        </Col>
     
       
      </Row>
    
 
      </Container>
       
      </div>

  );
};

export default Home;