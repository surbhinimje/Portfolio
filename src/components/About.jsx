import React from "react";
import Surbhi from "../images/profile-pic.png";
import {Fade } from "react-awesome-reveal";
import {  Row, Col, Container } from "react-bootstrap";


function About(){
   const skills = [
  "SQL",
  "Web Development",
  "Python",
  "Sterling OMS",
  "Git",
  "Gen AI",
  "API",
  "Microsoft Office",
  "PowerPoint",
  "Excel",
  "Power BI",
  "Business Analytics",
  "Data Analytics",
  "Strategy and Management",
  "Communication",
  "Project Management",
  "Product Management",
  "Documentation",
  "Jira",
  "Trello",
  "A/B Testing",
  "Product Strategy",
  "Agile"
];

    return <div id="about" >

        <h1>About Me</h1>
    <Fade cascade><img src={Surbhi}  className="profile"/>
     <p className="info"> Hello!! My name is Surbhi Nimje <br/>I’m an MBA graduate from IIM Shillong with a background in computer engineering and 2 years of hands-on experience across product-adjacent roles, strategy, and operations.<br/> I currently work as a Manager – Strategy & Operations at Justdial, driving data-led initiatives to improve processes, user outcomes, and business performance.<br/>

My earlier experience at Infosys and Tangentia involved working on large-scale order management and supply chain platforms, which strengthened my ability to work across business and tech teams. <br/>I enjoy solving ambiguous problems and am actively pursuing Product Management roles where I can own problems end-to-end.<br/> </p>
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
