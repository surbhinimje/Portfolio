import React from "react";
import Surbhi from "../images/profile-pic.png";
import {Fade } from "react-awesome-reveal";
import {  Row, Col, Container } from "react-bootstrap";


function About(){
    const skills=["HTML","CSS","Bootstrap","Javascript","React","NodeJs","Java","SQL","MySQL","Sterling OMS","Git"];
    return <div id="about" >

        <h1>About Me</h1>
    <Fade cascade><img src={Surbhi}  className="profile"/>
     <p className="info"> I am a Software Engineer with 1.75 years of experience. <br/>I have a Bachelor's degree in Computer Engineering, seeking employment as a FullStack Developer or a Web Developer.<br/> I am passionate about consistently advancing my knowledge and skills. </p>
    </Fade>
        <h1>My Skills</h1>
        <Container >
          
       
            <div class="horizontalList">
            <Row className="g-3">
            { skills.map((skill,k)=>(
              
                <Col key={k} xs={12} md={6} lg={4}>
                
                <div class="skill">
                    {skill}
                </div>
                </Col>
                
            ))}
           
            </Row>
               
</div>
    

        </Container>

    </div>
}
export default About;