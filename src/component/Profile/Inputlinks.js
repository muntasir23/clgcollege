import React from 'react';
import { IoIosImages } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Inputlinks() {
  return (
    <>
    <div className='name-section'>
        <Link to="/post">
        
       <div className='facebookinput'>
        <h1> What is your thought now?</h1>
        <h1> <IoIosImages /></h1>
       </div>
        </Link>
    </div>
    <div className='name-section'>
        <Link to="/postNotice">  
       <div className='facebookinput'>
        <h1> What is your notice now?</h1>
        <h1> <IoIosImages /></h1>
       </div>
        </Link>
    </div>
    </>
  )
}
