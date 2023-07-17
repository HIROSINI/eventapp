import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class About extends Component {
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
          <Link to="/Attendee"><a href="#">Select Events</a></Link>
          <Link to="/Manage"><a href="#">Manage Events</a></Link>
          <Link to="/Addcal"><a href="#">Add to Calender</a></Link>
          </div>
          </div>
          <div className='abo'>
          <img src="https://wallpapercave.com/wp/wp10715820.jpg" width="1300px" height="600px" style={{marginLeft:"60px"}}></img>
            <p>iDoEventz is one of the top event management companies, focuses on event management in a way that creates a win-win situation for all involved stakeholders. Our goal is to ensure that the clients, as well as participants of the event, have an overall positive experience. To do this, we don’t look at building one-time associations with clients; instead, we aim at creating long-lasting collaborations that will span years to come. Our core purpose is to flourish the WOW customer experience and to bring prosperity to the entire ecosystem connected with them.</p>
            <div className='points'>
                <p> ~ Experience different types of events available at your ease.</p>
                <p> ~ Excellent décor designs can add a touch of style to every occasion</p>
                <p> ~ Get customised destination wedding facilities and services.</p>
                <p> ~ Outstanding performances by talented artists will add significance to all Events.</p>
                <p> ~ Celebrate your special day at one of the best and most popular venues.</p>
                </div>
          </div>
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
}

export default About