import React from 'react'
import { Contact } from '../Components/Contact Us/Contact'
import './Contactus.css'
import { Link } from 'react-scroll'

export const Contactus = () => {
  return (
    <div> <div className='con-back'>
      <h2>Contact Us</h2>
      {/* <button><Link to={Contact} smooth={true} offset={-260} duration={500}>Connect</Link></button> */}
    </div>
    <Contact/></div>
  )
}
