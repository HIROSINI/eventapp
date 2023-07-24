import React from 'react'
import { Link  } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import './Organizer.css'

function Update() {

  const[id,setId]=useState("");
  const[organizer,setOrganizer] = useState("");
  const[eventname,setEventname] = useState("");
  const[fromdate,setFdate] = useState("");
  const[todate,setTodate] = useState("");
  const[fromtime,setFromtime] = useState("");
  const[totime,setTotime] = useState("");
  const[venue,setVenue] = useState("");
  const[description,setDescription] = useState("");
  const[agenda,setAgenda] = useState("");
  const[capacity,setCapacity] = useState("");
  const[price,setPrice] = useState("");
  const [allDetails, setAllDetails] = useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put(
        'http://127.0.0.1:8181/update/eventdetails',
        {
          eventid: id,
          organizername: organizer,
          eventname: eventname,
          startdate: fromdate,
          enddate: todate,
          starttime: fromtime,
          endtime: totime,
          venue: venue,
          eventdescription: description,
          eventagenda: agenda,
          capacity: capacity,
          priceperperson: price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
      );
      
      alert('Form Updated Successfully!');
      
    } catch (error) {
      console.error('Form submission failed:', error);
    }
    // if (submitted) {
    //   const eventDetails = {
    //     organizer,
    //     eventname,
    //     fromdate,
    //     todate,
    //     fromtime,
    //     totime,
    //     venue,
    //     description,
    //     agenda,
    //     capacity,
    //     price,
    //   };

    //   // Redirect with state using the `push` method
    //   navigate('/Attendee', { state: { eventDetails } });
  }
    
    
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
          <div className='orgform'>
            <p className='kind'>Kindly Provide the Details Regarding the Event:</p>
            <form className='oform'>
            <label>Event ID:</label><br></br>
            <input type="text" id="fname" value={id} onChange={(e)=>setId(e.target.value)} placeholder="Event ID"/><br></br>
            <label>Organizer:</label><br></br>
            <input type="text" id="fname" value={organizer} onChange={(e)=>setOrganizer(e.target.value)} placeholder="Organizer Name"/><br></br>
            <div style={{float:"right",marginTop:"-67px"}}><label>Event name:</label><br></br>
            <input type="text" id="fname" value={eventname} onChange={(e)=>setEventname(e.target.value)} placeholder="Event Name"/></div><br></br>
            <label>Date [ From ]:</label><br></br>
            <input type="date" id="fname" value={fromdate} onChange={(e)=>setFdate(e.target.value)}/><br></br>
            <div style={{float:"right", marginTop:"-70px"}}><label>Date [ To ]:</label><br></br>
            <input type="date" id="fname" value={todate} onChange={(e)=>setTodate(e.target.value)}/></div><br></br>
            <label>Timings [ From ]:</label><br></br>
            <input type="time" id="fname" value={fromtime} onChange={(e)=>setFromtime(e.target.value)}/><br></br>
            <div style={{float:"right",marginTop:"-67px"}}><label>Timings [ To ]:</label><br></br>
            <input type="time" id="fname" value={totime} onChange={(e)=>setTotime(e.target.value)}/></div><br></br>
            <label>Price Per Person:</label><br></br>
            <input type="number" id="fname" min="1" value={price} onChange={(e)=>setPrice(e.target.value)}/><br></br>
            <div style={{float:"right", marginTop:"-60px"}}><label>Capacity:</label><br></br>
            <input type="number" id="fname" min="1" value={capacity} onChange={(e)=>setCapacity(e.target.value)}/></div><br></br>
            <label>Event Venue:</label><br></br>
            <textarea id="lname" placeholder="Event Venue" rows="5" cols="50" value={venue} onChange={(e)=>setVenue(e.target.value)}/><br></br>
            <label>Event Description:</label><br></br>
            <textarea id="lname" placeholder="Description" rows="12" cols="50" value={description} onChange={(e)=>setDescription(e.target.value)}/><br></br>
            <label>Event Agenda:</label><br></br>
            <textarea id="lname" placeholder="Agenda" rows="15" cols="50" value={agenda} onChange={(e)=>setAgenda(e.target.value)}/>
          </form>
          </div>
          <div className='eveimg'><img src="https://static.vecteezy.com/system/resources/previews/005/190/848/original/event-management-word-concepts-banner-scheduling-and-organization-event-agency-presentation-website-isolated-lettering-typography-idea-with-linear-icons-outline-illustration-vector.jpg" alt="pic" className='desimg'></img></div>
          <button type='Submit' className='orgsub' onClick={handleChange}>Update</button>

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

export default Update
