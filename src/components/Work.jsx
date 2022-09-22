import React from "react";
import Tangentia from "../images/tangentia.png";
import Infosys from "../images/infosys.png";



import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Work(){
    const jobs=[
      {
         
            img:Tangentia,
            profile:"OMS Developer",
            place:"Tangentia Inc.",
            duration:"April 2022-July 2022"

        },
       {
            img:Infosys,
            profile:"System Engineer",
            place:"Infosys Ltd.",
            duration:"Nov 2020-March 2022"

        }

    ];
 
    return <div id="work">

    <h1>Work Experience</h1>
   
    <VerticalTimeline layout="2-columns" lineColor="black" animate="true">
    {jobs.map((work)=> ( 
        
           
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#A1DD70', color: 'black', borderRadius:'20px' }}
    contentArrowStyle={{ borderRight: '25px solid   #A1DD70' }}
    date={work.duration}
    iconStyle={{ background: '#A1DD70', color: 'black' }}
        
  >
  
    <h3 className="vertical-timeline-element-title">{work.profile}</h3>
    <h4 className="vertical-timeline-element-subtitle place">{work.place}</h4>
   
  </VerticalTimelineElement>
))}
</VerticalTimeline>
    
   
    </div>
   
}
export default Work;