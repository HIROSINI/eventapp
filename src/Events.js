import React, { Component } from 'react'
import './Events.css'
import { Link } from 'react-router-dom'
export default class Events extends Component {
  render() {
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
            <a href="#">Select Events</a>
            <a href="#">Modify Events</a>
            <a href="#">Delete Events</a>
            <a href="#">Add to Calender</a>
          </div>
          </div>
          <div>
          <img src="https://static.vecteezy.com/system/resources/previews/000/542/587/original/abstract-blue-background-in-premium-indian-style-template-design-for-cover-business-presentation-web-banner-wedding-invitation-and-luxury-packaging-vector-illustration-with-golden-border.jpg" width={1300} height={650} style={{marginLeft:"130px"}}></img>
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
