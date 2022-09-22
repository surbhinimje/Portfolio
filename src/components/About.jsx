import React from "react";
import Surbhi from "../images/profile-pic.png";
import { Slide,Fade,Reveal } from "react-awesome-reveal";


function About(){
    const skills=["HTML","CSS","Bootstrap","Javascript","React","NodeJs","Java","SQL","MySQL","Sterling OMS","Git"];
    return <div id="about" >

        <h1>About Me</h1>
    <Fade cascade><img src={Surbhi}  className="profile"/>
     <p className="info"> I am a Software Engineer with 1.75 years of experience. <br/>I have a Bachelor's degree in Computer Engineering, seeking employment as a FullStack Developer or a Web Developer.<br/> I am passionate about consistently advancing my knowledge and skills. </p>
    </Fade>
        <h1>My Skills</h1>
        <Fade cascade>
            <div class="horizontalList">
           
            { skills.map((skill)=>(
                <div class="skill">
                    {skill}
                </div>
            ))}
           
        
               
</div>
    </Fade>

    </div>
}
export default About;