import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Ticket.css'

function Ticket() {


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const receivedValue = queryParams.get('data1');
  const receivedValue1 = queryParams.get('data2');

  const [numTickets, setNumTickets] = useState(1);

  const handleNumTicketsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumTickets(value);
  };

  const totalAmount = receivedValue * numTickets;

  return (
    <>
        <nav class="nav0">
          <ul>
            <p className="idoHome">iDoEventZ</p>
            <li className='nav1'><Link to="/">Log Out</Link></li>
            <li className='nav1'><Link to="/Profile">Profile</Link></li>
            {/* <li className='nav1'><Link to="/Events">Chat With Us</Link></li> */}
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
          <Link to="/Feedback"><a href="">Feedback</a></Link>
          </div>
          </div>
            <p className='kind1'>Kindly Provide the Details to Book Tickets:</p>
          <div className='orgform1'>
            <form className='oform1'>
            <h2 className='evdet'>Event Details</h2>
          <p className='pt'>Event name: {receivedValue1} </p>
        <p className='pt'>Price Per Person: $  {receivedValue} </p>
      <h2 className='evdet'>Ticket Purchase</h2>
      <label htmlFor="numTickets">Number of Tickets:</label><br></br>
      <input
        type="number"
        id="numTickets"
        value={numTickets}
        min="1"
        onChange={handleNumTicketsChange}
      />

      <h3>Total Amount to Pay: ${totalAmount}</h3>
            <button type='Submit' className='orgsub1'>Make Payment</button>
          </form>
          </div>
          {/* <div className='eveimg'><img src="https://image.slidesdocs.com/responsive-images/background/movie-ticket-funny-projector-powerpoint-background_d13b1bf404__960_540.jpg" alt="pic" className='desimg'></img></div> */}
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


export default Ticket