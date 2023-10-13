import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <div className='p-3 text-center bg-dark text-white'>
           <p>COPYRIGHT © {year}</p>
    </div>
  )
}

export default Footer;


