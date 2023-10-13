import React, { useEffect } from 'react'
import img from "../images/homeImage.webp";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import resume from "../images/myresume.pdf";
const About = () => {
    useEffect(()=>{
          AOS.init({duration:2000})
    },[])
    return (
        <div className='w-100 about' id='about'>
              <div className='container'>
            <div className='row pt-5'>
                <div className='col-12 col-md-6 col-lg-6 aboutImagePart ' data-aos="fade-right">
                    <img src={img} alt='myimg' />
                </div>

                <div className='col-12 col-md-6 col-lg-6 aboutTextPart text-white' data-aos="fade-left">
                    <div>
                        <h3>
                            Hellow, I am Dipak Zende
                        </h3>
                        <p>
                            I am passionate and extremely motivated new front-end developer. I believe I stand out due to my passion
                            for continuous innovation and pushing boundaries bring forward new ideas. with my skills, I identify
                            real-world challenges and develope applications that bring efficiency and improvement to the lives
                            of users and also showcase which technical improvements can make meaningfull impact on the user and the bussiness.
                        </p>

                        <table>
                            <tbody>
                                <tr>
                                    <td className='pe-5'>Name</td>
                                    <td>: Dipak Zende</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Age</td>
                                    <td>: 24</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Address</td>
                                    <td>: Parbhani,Maharashtra(India)</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Phone</td>
                                    <td>: 8669512928</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>E-mail</td>
                                    <td>: deepakzende307@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                      <a href={resume} download="Resume">
                     <button className='btn downloadcv mt-4'>Download CV</button> </a> 
                  
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;