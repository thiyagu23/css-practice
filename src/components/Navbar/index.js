import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-list'>Home</div>
      <div className='nav-list'>Data explorer</div>
      <div className='nav-list'>Report & Resources</div>
      <div className='nav-list'>Do you know gen Z?</div>
      <button className='nav-list'>Share</button>
    </div>
    )
}       

export default Navbar;