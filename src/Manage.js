import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Manage.css'
export class Manage extends Component {
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
        <Link to="/Attendee"><a href="#">Select Events</a></Link>
        <Link to="/Manage"><a href="#">Manage Events</a></Link>
        <Link to="/Addcal"><a href="#">Add to Calender</a></Link>
          </div>
          </div>
          <div className='mandiv'>
          <img src="https://png.pngtree.com/background/20210710/original/pngtree-creative-blue-light-stage-banner-background-picture-image_977106.jpg"  className="Manimg"></img></div>
          <div class="newbox">Showiz Musical Concert
          <div>Time: 6pm to 12pm</div>
          <div>Venue: Codissia Ground</div>
          <br></br>
          <i class="material-icons" >delete</i>
          <button class="updbutton">Update</button>
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

export default Manage