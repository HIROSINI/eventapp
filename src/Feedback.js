import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Feedback.css'

function Feedback() {
    const[email,setEmail] = useState("");
        const[feedback,setFeedback] = useState("");
        const navigate = useNavigate();
        let token = localStorage.getItem('token');
        console.log(token);
    
    
        const handleChange = async(event) => {

          if(email.length !== 0 && (/$^|.+@.+..+/).test(email)&& feedback.length !== 0){
            try{
                  console.log(email)
                  console.log(feedback)
                const response= axios.post("http://localhost:8181/api/v1/users/addUserFeedback",{ 
                  email:email,
                  feedback:feedback,
  },
  {
    headers:{
      "Authorization":`Bearer ${token}`,
      "cache-control":'no-cache', 
                  }
                }
            
                );
                window.alert('Response submitted')
    //             navigate('/HomePage')
              
              }
                catch(error){
                  console.log(error);
                }
                }
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
          <Link to="/Feedback"><a href="">Feedback</a></Link>
          </div>
          </div>
          <div className='feed'>
    <h2>FeedBack:</h2>
    <label>Email:</label><br></br>
    <input type="text" required onChange={e => setEmail(e.target.value)}></input><br></br><br></br>
    <label>Feedback:</label><br></br>
    <textarea type="text" required onChange={e => setFeedback(e.target.value)} ></textarea><br></br><br></br>
    <button type="button" onClick={handleChange}>Submit</button>
    </div>
    <div className='footer'>
          <p className="foot1">Copyright © 2023 iDoEventZ</p>
          <p class="foot2"> Terms and Conditions  </p>
          <p class="foot3">Privacy Policy  </p>
          <p className="foot4">Contact Us</p>
          <p class="foot5">Support  </p>
          <p class="foot6">FAQs </p>
          <div className="icon1"><a href="https://mail.google.com"  class="fa fa-envelope"/></div>
          <div className="icon2"><a href="https://www.facebook.com" class="fa fa-facebook"/></div>
          <div className="icon3"><a href="https://www.twitter.com" class="fa fa-twitter"/></div>
          <div className="icon4"><a href="https://www.linkedin.com" class="fa fa-linkedin"/></div>
          <div className="icon5"><a href="https://www.instagram.com" class="fa fa-instagram"/></div>
          </div>
    </>
  )
}

export default Feedback