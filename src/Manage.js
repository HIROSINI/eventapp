import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Manage.css'
import axios from 'axios';

function Manage() {

  const handleDeleteEvent = async () => {
    const eventIdToDelete = prompt('Please enter the Event ID to delete:');
    if (eventIdToDelete) {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8181/delete/eventdetails/${eventIdToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'cache-control': 'no-cache',
            },
          }
        );
        if (response.status === 200) {
          alert('Event details deleted successfully!');
          // Optionally, you can update the state to clear the form fields or refresh the event list
          // setAllDetails([...updatedEventList]);
          // setId('');
          // setOrganizer('');
          // setEventname('');
          // setFdate('');
          // setTodate('');
          // setFromtime('');
          // setTotime('');
          // setVenue('');
          // setDescription('');
          // setAgenda('');
          // setCapacity('');
          // setPrice('');
        }
      } catch (error) {
        console.error('Event deletion failed:', error);
      }
    } else {
      alert('Event ID cannot be empty. Deletion canceled.');
    }
  };
  return (
    <>
        <nav class="nav0">
          <ul>
            <p className="idoHome">iDoEventZ</p>
            <li className='nav1'><Link to="/">Log Out</Link></li>
            <li className='nav1'><Link to="/Profile">Profile</Link></li>
            <li className='nav1'><Link to="/Events">Chat With Us</Link></li>
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
          <a href="https://calendar.google.com/calendar/r/eventedit">Add to Calender</a>
          </div>
          </div>
          <div className='mandiv'>
          <div class="newbox">
          {/* <div>Time: 6pm to 12pm</div>
          <div>Venue: Codissia Ground</div>
        <br></br> */}
          <Link to="/Update"><button class="updbutton" type='button'>Update</button></Link>
          <button type="button" className="orgdelete" onClick={handleDeleteEvent} style={{marginLeft:"70px"}}>Delete Event</button>
          </div>
        <img src="https://png.pngtree.com/background/20210710/original/pngtree-creative-blue-light-stage-banner-background-picture-image_977106.jpg"  className="Manimg"></img></div>
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

export default Manage
