import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'
import axios from 'axios';


function Profile({user}) {
  
  const navigate=useNavigate();
  const[name,setName] = useState("");
  const[email,setMail] = useState("");
  const[contact,setContact] = useState("");
  // const[role,setRole] = useState("");
  const uid=localStorage.getItem('uid');
  const uname=localStorage.getItem('uname');
  const upass=localStorage.getItem('upass');
  const urole=localStorage.getItem('urole');
  const ucontact=localStorage.getItem('ucontact');
  const uemail=localStorage.getItem('uemail');
  const token = localStorage.getItem('token');
  // const [userid,setId]=useState(uid);
  // console.log(userid);
  console.log(uid);
  const handleUpdate = async() => 
  {
        try 
        {
          console.log(urole)
          await axios.put('http://127.0.0.1:8181/update/user', {
          id: `${uid}`, // Assuming you get the user id from the server
          contact: contact,
          email: email,
          name: name,
          password: upass,
          role: "USER",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
        );
        alert('User details updated successfully!');

      } 
      catch (error)
      {
        console.error('User Updation failed:', error);
      }
      
    };
    const handleDelete = async () => {
      try 
      {
        await axios.delete(`http://127.0.0.1:8181/delete/user/${uid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
        }
        );
        alert('Account deleted successfully!');
        navigate('/Signup');
      } 
      catch (error) 
      {
              console.error("Delete failed:", error);
      }
  };

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

          <div className='container'>
          <div className="left-side">
            <img src='https://cdn-icons-png.flaticon.com/512/6915/6915987.png' className='profile-image'/>
            </div>
            <div className='right-side'>
      <h1>User Profile</h1>
    <p>Id: {uid}</p>
      <label>Name:</label>
      <input type="text" placeholder={`${uname}`} onChange={e => setName(e.target.value)}></input><br></br>
      <label>Email:</label>
      <input type="text" placeholder={`${uemail}`} onChange={e => setMail(e.target.value)}></input><br></br>
      <label>Contact:</label>
      <input type="text" placeholder={`${ucontact}`} onChange={e => setContact(e.target.value)}></input><br></br>
      <button onClick={handleUpdate}>Update Details</button>
      <button onClick={handleDelete}>Delete Account</button>
      </div>
    </div>
          <div className='footer'>
          <p className="foot1">Copyright © 2023 iDoEventZ</p>
          <p class="foot2"> Terms and Conditions </p>
          <p class="foot3">Privacy Policy </p>
          <p className="foot4">Contact Us</p>
          <p class="foot5">Support </p>
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

export default Profile
