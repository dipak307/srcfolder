import React from 'react'
import Typewriter from "typewriter-effect";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import myimg from "../images/homeImage.webp";
import "./Home.css";
const Home = () => {
  return (
    <div className='w-100 home' id="home">
     <div className='container'>
        <div className='row pt-5'>
       <div className='col-12 col-md-6 col-lg-6 homeTextPart text-white'>
            <div>
                 <h3 className='welcome'>
                    WELCOME !
                 </h3>
                 <h1>
                     <Typewriter 
                         options={{
                            autoStart:true,
                            loop:true,
                            delay:60,
                            strings:["I AM WEB-DEVELOPER","I AM FRONT-END DEVELOPER","I AM WEB-DESIGNER"]
                         }}
                     />
                 </h1>
                 <p>
                    I'm Dipak Zende and I'm Front-End developer and eager to learn new technologies, My expertise is 
                    to create front-end design for a website.
                 </p>
                 <div className='icons'>
                <a href='https://www.linkedin.com/in/dipak-zende-214375179'><FontAwesomeIcon className="Icon" icon={faLinkedin}/> </a>
                <a href='https://github.com/dipak307'><FontAwesomeIcon className="Icon" icon={faGithub}/> </a>
                <a href='https://www.youtube.com/channel/UCIXiZc5P09UREkINo-frtNA'><FontAwesomeIcon className="Icon" icon={faYoutube}/> </a>
                 </div>
            </div>
       </div>
       <div className='col-12 col-md-6 col-lg-6'>
          <img src={myimg} alt="myimg" />
       </div>
        </div>
     </div>
    </div>
  )
}

export default Home;