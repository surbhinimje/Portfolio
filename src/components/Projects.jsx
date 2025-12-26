import projects from "../projects.js";
import React from "react";
import {BsCodeSlash} from "react-icons/bs";
import {FiExternalLink} from "react-icons/fi";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";


function Projects(){

return <div id="projects">
<h1>Projects</h1>
 <Container >
            <Row>
                {projects.map((project,k) => (
                    <Col key={k} xs={12} md={12} lg={4}>
                    
                    <Fade cascade>
                        <div className="card-header p-3 border-light">
                        <Card className="shadow-soft border-light">
                          <Card.Img className="rounded" src={project.img} fluid="true"/>
                     
                        
                            <Card.Body>
                           
                            <Card.Title>{project.projectName}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <ul ><Card.Text>{project.technologies.map((technology)=>(
                                    <li>{technology}</li> 
                                ))}</Card.Text></ul>
                           
                              <div class="btn-container">
                           
                              
                                <Card.Link href={project.url}>View Site <FiExternalLink/></Card.Link> 
                      

                                <Card.Link href={project.repository}>Source Code <BsCodeSlash/></Card.Link> 
                               
                                </div> 
                            
                            </Card.Body>
                            </Card>
                            </div>
                      </Fade>
                    </Col>
                ))}
            </Row>
        </Container>
</div>

}
export default Projects;