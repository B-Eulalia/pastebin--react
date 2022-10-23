import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <li className='navbar'>
      <Link style={{color:'white'}} className='home' to="/"> Home </Link>
      <Link style={{color:'white'}} className='list' to="/list"> List </Link>
      <Link style={{color:'white'}} className='login' to="/login"> Log in </Link>
      <Link style={{color:'white'}} className='singup' to="/singup"> Sing up </Link>
    </li>
  );
}
export default Navbar;