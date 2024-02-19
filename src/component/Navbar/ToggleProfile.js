import React from 'react';
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';


export default function ToggleProfile(props) {
 
    const {logout} = useAuth()

  return (
    <div className='toggleProfile'>
        <ul>
            <li><Link to="/postNotice" onClick={props.change}> Add Notice</Link></li>
            <li><Link to="/post" onClick={props.change}> Add Events</Link></li>
            <li><Link to="/addstudents" onClick={props.change}> Add Students</Link></li>
            <li><Link to="/profile" onClick={props.change}>Your Profile</Link></li>
            <li>
            <button className='logout-btn-nav' onClick={logout}><IoLogOut /> LogOut</button>
            </li>
        </ul>
    </div>
  )
}
