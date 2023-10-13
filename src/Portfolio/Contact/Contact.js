
import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_elzto8r', 'template_naxqpaf', form.current, 'at5B5YnK7rIwJjNLS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className='contact text-center text-white pb-2' id="contact">
    <br/> <h1>Contact</h1> <br/>
    <hr/>

    <div className='mx-md-auto text-center container'>
     <form ref={form} onSubmit={sendEmail}>
         <div  className='form-group mt-2'>
          <label for="Uname">User Name :</label>
          <input type='text' className='form-control' id='uname' placeholder='enter your name' name='user_name' />
         </div>
         <div  className='form-group mt-2'>
          <label for="email">Email :</label>
          <input type='email' className='form-control' id='email' placeholder='enter your email' name='user_email'/>
         </div>
         <div  className='form-group mt-2'>
          <label for="message">Message :</label>
          <textarea  className='form-control'  placeholder='enter your message'name='message' cols="30" rows="10" ></textarea>
         </div>
        <button type='submit' className='btn mt-2'>Send</button>
     </form>
    </div>

    </div>
  )
}

export default Contact;