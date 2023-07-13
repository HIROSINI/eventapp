import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Attendee.css'
export class Attendee extends Component {
  render() {
    return (
      <>
        <nav class="nav0">
          <ul>
            <p className="idoHome">iDoEventZ</p>
            <li className='nav1'><Link to="/">Log Out</Link></li>
            <li className='nav1'><Link to="/Home">Profile</Link></li>
            <li className='nav1'><Link to="/Events">Events Invitation</Link></li>
            <li className='nav1'><Link to="/About">About</Link></li>
            <li className='nav1'><Link to="/Home">Home</Link></li>
          </ul>
        </nav>
          <div class="dropdown">
          <button class="dropbtn">☰ Menu</button>
          <div class="dropdown-content">
          <Link to="/Organizer"><a href="#">Create Events</a></Link>
            <a>Select Events</a>
            <a>Modify Events</a>
            <a>Delete Events</a>
            <a>Add to Calender</a>
          </div>
          </div>
          <div className='footer'>
          <p className="foot1">Copyright © 2023 iDoEventZ</p>
          <p class="foot2"> Terms and Conditions  </p>
          <p class="foot3">Privacy Policy  </p>
          <p className="foot4">Contact Us</p>
          <p class="foot5">Support  </p>
          <p class="foot6">FAQs </p>
          <i class="fa fa-envelope"/>
          <i class="fa fa-facebook"/>
          <i class="fa fa-twitter"/>
          <i class="fa fa-linkedin"/>
          <i class="fa fa-instagram"/>
          </div>
      </>
    )
  }
}

export default Attendee