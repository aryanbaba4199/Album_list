import React from 'react';
import { Link } from 'react-router-dom'

//get button name and path for evaery component
const handleClick = () => {
  // Perform any other actions you need before redirecting
  // Redirect the user to the homepage
  window.location.href = '/'; // Replace '/' with the actual URL of your homepage
};


const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2 onClick= {handleClick}>
        <span className='brand-first-half'>ALBUMS</span>
        <span className='brand-last-half'>LIST</span>
      </h2>
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar

