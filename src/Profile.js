import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Profile.css'


function Profile() {
  


  return (
    <>
    <nav class="nav0">
          <ul>
            <p className="idoHome">iDoEventZ</p>
            <li className='nav1'><Link to="/">Log Out</Link></li>
            <li className='nav1'><Link to="/Profile">Profile</Link></li>
            <li className='nav1'><Link to="/Events">Events Invitation</Link></li>
            <li className='nav1'><Link to="/About">About</Link></li>
            <li className='nav1'><Link to="/Home">Home</Link></li>
          </ul>
        </nav>
          <div class="dropdown">
          <button class="dropbtn">☰ Menu</button>
          <div class="dropdown-content">
          <Link to="/Organizer"><a href="#">Create Events</a></Link>
          <Link to="/Attendee"><a href="#">Select Events</a></Link>
          <Link to="/Manage"><a href="#">Manage Events</a></Link>
          <Link to="/Addcal"><a href="#">Add to Calender</a></Link>
          </div>
          </div>
          <div className='prohead'>
            <h2 className='hpro'>Profile</h2>
            <img src="data:image/png;base64,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" className="ppro"></img>
          </div>
            
        <Link to="/Privacy"><button class="signbutton">Update</button></Link>
          <div className='footer'>
          <p className="foot1">Copyright © 2023 iDoEventZ</p>
          <p class="foot2"> Terms and Conditions  </p>
          <p class="foot3">Privacy Policy  </p>
          <p className="foot4">Contact Us</p>
          <p class="foot5">Support  </p>
          <p class="foot6">FAQs </p>
          <div className="icon1"><i  class="fa fa-envelope"/></div>
          <div className="icon2"><i class="fa fa-facebook"/></div>
          <div className="icon3"><i class="fa fa-twitter"/></div>
          <div className="icon4"><i class="fa fa-linkedin"/></div>
          <div className="icon5"><i class="fa fa-instagram"/></div>
          </div>
    </>
  )
}

export default Profile
