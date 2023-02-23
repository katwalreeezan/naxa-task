import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/services'>Services</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/company'>Company</Link>
        <Link to='/event'>Events and Media</Link>
        <Link to='/blogs'>Blogs</Link>
        <button>Let's talk</button>
    </div>
  )
}

export default Navbar