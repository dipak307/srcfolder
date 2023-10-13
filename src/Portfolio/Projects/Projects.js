import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import "./Projects.css"
import mailbox from "../images/mailbox.png";
import resume2 from "../images/resume2.png";
import resume from "../images/resume.png";
import SortingVisualizer from "../images/sorting_visualizer.jpg.png";

const Projects = () => {

    useEffect(()=>{
          AOS.init({duration:2000})
    },[])
  return (
    <div className='projects p-5'id='project'>
        <div className='myProjectsText pt-5'>
            <h3>MY <span>PROJECTS</span></h3> <br/>
            <hr/>
        </div>
         <div className='container text-center mt-5'>
           <div className='row'>
               <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                   <div className='card text-dark'>
                    <img src={resume2} className='card-img-top' alt='social-media'/>
                    <div className='card-body'>
                      <h5  className='card-title'>Resume Builder App</h5>
                      <p>Resume Builder App which is help to the user make quick their resume its made by using React js and JavaScript</p>
                      <a href='https://dipakresumebuilder.netlify.app/' target='_dipak' className='btn'>See Demo</a>
                    </div>
                   </div>
               </div>
              
               <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                   <div className='card text-dark'>
                    <img src={mailbox} className='card-img-top' alt='social-media'/>
                    <div className='card-body'>
                      <h5  className='card-title'>Mail Box Client</h5>
                      <p> Mail Box Client App used for the how actually the user send their message through email and thats is received to the receiver inbox, its made by using the React js and Redux</p>
                      <a href='https://mailboxdipak.netlify.app/' target='_blank' className='btn'>See Demo</a>
                    </div>
                   </div>
               </div>
               <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                   <div className='card text-dark'>
                    <img src={SortingVisualizer} className='card-img-top' alt='social-media'/>
                    <div className='card-body'>
                      <h5  className='card-title'>Sorting Visualizer</h5>
                      <p> Sorting Visualizer its help to the user how actually the sorting algorithm work and they can also visualize it , its made by using HTML,CSS and JavaScript</p>
                      <a href='https://dipaksortingvisualizer.netlify.app' target='_blank' className='btn'>See Demo</a>
                    </div>
                   </div>
               </div>
           </div>
         </div>
    </div>
  )
}

export default Projects;