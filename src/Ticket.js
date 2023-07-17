import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Organizer.css'
export class Ticket extends Component {
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
          <div className='orgform'>
            <p className='kind'>Kindly Provide the Details Regarding the Event:</p>
            <form className='oform'>
            <label>Organizer:</label><br></br>
            <input type="text" id="fname" placeholder="Organizer Name"/><br></br>
            <div style={{float:"right",marginTop:"-67px"}}><label>Event name:</label><br></br>
            <input type="text" id="fname" placeholder="Event Name"/></div><br></br>
            <label>Timings [ From ]:</label><br></br>
            <input type="time" id="fname"/><br></br>
            <div style={{float:"right",marginTop:"-67px"}}><label>Timings [ To ]:</label><br></br>
            <input type="time" id="fname"/></div><br></br>
            <label>Event Venue:</label><br></br>
            <textarea id="lname" placeholder="Event Venue" rows="5" cols="50"/><br></br>
            <label>Event Description:</label><br></br>
            <textarea id="lname" placeholder="Description" rows="12" cols="50"/><br></br>
            <label>Event Agenda:</label><br></br>
            <textarea id="lname" placeholder="Agenda" rows="15" cols="50"/>
          </form>
          </div>
          <div className='eveimg'><img src="https://static.vecteezy.com/system/resources/previews/005/190/848/original/event-management-word-concepts-banner-scheduling-and-organization-event-agency-presentation-website-isolated-lettering-typography-idea-with-linear-icons-outline-illustration-vector.jpg" alt="pic" className='desimg'></img></div>
          <button type='Submit' className='orgsub'>Submit</button>
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

export default Ticket