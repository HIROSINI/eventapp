import React from 'react'
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Attendee.css'


function Attendee() 
{
  const [allDetails, setAllDetails] = useState([]);

  // New function to fetch all details from the table
  const fetchAllDetails = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://127.0.0.1:8181/show/eventdetails', {
        headers: {
          Authorization: `Bearer ${token}`,
          'cache-control': 'no-cache',
        },
      });

      // Assuming the response data contains an array of event details
      const allDetails = response.data;
      setAllDetails(allDetails); // Set the fetched details to the state
    } catch (error) {
      console.error('Error fetching all details:', error);
    }
  };

  // Call the fetchAllDetails function when the component mounts
  useEffect(() => {
    fetchAllDetails();
  }, []);

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
          <div>
        {allDetails.map((eventData) => (
          <div key={eventData._id}>
            <Link
              to={{
                pathname: '/Ticket',
                state: { eventData }, // Pass the event details as state
              }}
            >
              <h2>{eventData.eventname}</h2>
            </Link>
            <p>Organizer: {eventData.organizername}</p>
            <p>Event Name: {eventData.eventname}</p>
            <p>Start Date: {eventData.startdate}</p>
            <p>End Date: {eventData.enddate}</p>
            <p>Start Time: {eventData.starttime}</p>
            <p>End Time: {eventData.endtime}</p>
            <p>Venue: {eventData.venue}</p>
            <p>Description: {eventData.eventdescription}</p>
            <p>Agenda: {eventData.eventagenda}</p>
            <p>Capacity: {eventData.capacity}</p>
            <p>Price Per Person: {eventData.priceperperson}</p>
        </div>
        ))}
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

export default Attendee
