import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css"
import "./Services.css"

const Services = () => {

    useEffect(()=>{
          AOS.init({duration:2000})
    },[])
  return (
    <div className='services p-5' id='service'>
        <div className='myServicesText pt-5'>
            <h3>MY <span>SERVICES</span></h3> <br/>
            <hr/>
        </div>
         <div className='container text-center mt-5'>
           <div className='row'>
               <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                   <div className='border service p-4'>
                    <p className='serviceIcon'> <span className='border p-2'><FontAwesomeIcon icon={faCode}/></span></p>
                     <h5 className='mt-4'>WEB DEVELOPMENT</h5>
                     <p>Description Description Description Description Description Description Description Description </p>
                   </div>
               </div>
               <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                   <div className='border service p-4'>
                    <p className='serviceIcon'> <span className='border p-2'><FontAwesomeIcon icon={faPhotoVideo}/></span></p>
                     <h5 className='mt-4'>PHOTOGRAPHY</h5>
                     <p>Description Description Description Description Description Description Description Description </p>
                   </div>
               </div>
               <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                   <div className='border service p-4'>
                    <p className='serviceIcon'> <span className='border p-2'><FontAwesomeIcon icon={faPen}/></span></p>
                     <h5 className='mt-4'>FRONT-END DEVELOPER</h5>
                     <p>Description Description Description Description Description Description Description Description </p>
                   </div>
               </div>
           </div>
         </div>

    </div>
  )
}

export default Services;