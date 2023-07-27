import { Link } from "react-router-dom"
import './Home.css'
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from './Redux/userSlice';


export default function Home() 
{
  const user=useSelector(selectUser);
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
            <p className="helloo">Hello {user} !</p>
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
          <div class="scroll-container">          
          <img src="https://img.freepik.com/free-photo/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs_8353-10059.jpg?size=626&ext=jpg&ga=GA1.1.1070303954.1688896054&semt=ais" alt="image1" width="500" height="400"></img>
          <img src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image4" width="500" height="400"></img>
          <img src="https://img.freepik.com/free-photo/groom-bride-s-wedding-table-decorated-with-flowers-candles_8353-10400.jpg?size=626&ext=jpg&ga=GA1.1.1070303954.1688896054&semt=ais" alt="image2" width="500" height="400"></img>
          <img src="https://img.freepik.com/premium-photo/close-up-equipment-disco-club_88135-12417.jpg?size=626&ext=jpg&ga=GA1.1.1070303954.1688896054&semt=ais" alt="image3" width="500" height="400"></img>
          <img src="https://img.freepik.com/free-photo/people-having-fun-wedding-hall_1303-19593.jpg?size=626&ext=jpg&ga=GA1.1.1070303954.1688896054&semt=ais" alt="image4" width="500" height="400"></img>
          <img src="https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image4" width="500" height="400"></img>
          <img src="https://images.pexels.com/photos/1782146/pexels-photo-1782146.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image4" width="500" height="400"></img>
          <img src="https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image4" width="600" height="400"></img>
          </div>
            <div className="hel">
          <p className="lets">Lets Organize and Attend Events Together!</p>
          <h3 className='are'>Are you an</h3>
          <Link to="/Organizer"><div class="org">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1J2o_BzWEMs3jWSxFnhUJnXc2zegh0PpasBbeXKUVIoKwlKE4DmPO6z2jDpY61dUb5ls&usqp=CAU"/>
            <div class="organizer">Organizer</div>
          </div></Link>
          <Link to="/Attendee"><div class="att">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpOjG3htIajN8L_PEzuuipj818zupMWz_WM7BiNv1jFGDEhXtFNTayOpqovJB8vT1c04&usqp=CAU"/>
            <div class="attendee">Attendee</div>
          </div></Link>
          </div>
          <div className="Aboutho">
          <h2 className="abhead">ABOUT US</h2>
          <div className='abo'>
            <p>iDoEventz is one of the top event management companies, focuses on event management in a way that creates a win-win situation for all involved stakeholders. Our goal is to ensure that the clients, as well as participants of the event, have an overall positive experience. To do this, we don’t look at building one-time associations with clients; instead, we aim at creating long-lasting collaborations that will span years to come. Our core purpose is to flourish the WOW customer experience and to bring prosperity to the entire ecosystem connected with them.</p>
            <div className='points'>
                <p> ~ Experience different types of events available at your ease.</p>
                <p> ~ Excellent décor designs can add a touch of style to every occasion</p>
                <p> ~ Get customised destination wedding facilities and services.</p>
                <p> ~ Outstanding performances by talented artists will add significance to all Events.</p>
                <p> ~ Celebrate your special day at one of the best and most popular venues.</p>
                </div>
          </div>
          </div>
          <div className='footer'>
          <p className="foot1">Copyright © 2023 iDoEventZ</p>
          <Link to="/Terms"><p class="foot2"> Terms and Conditions  </p></Link>
          <Link to="/Privacy"><p class="foot3">Privacy Policy  </p></Link>
          <p className="foot4">Contact Us</p>
          <p class="foot5">Support  </p>
          <Link to="/Faq"><p class="foot6">FAQs </p></Link>
          <div className="icon1"><a href="https://mail.google.com"  class="fa fa-envelope"/></div>
          <div className="icon2"><a href="https://www.facebook.com" class="fa fa-facebook"/></div>
          <div className="icon3"><a href="https://www.twitter.com" class="fa fa-twitter"/></div>
          <div className="icon4"><a href="https://www.linkedin.com" class="fa fa-linkedin"/></div>
          <div className="icon5"><a href="https://www.instagram.com" class="fa fa-instagram"/></div>
          </div>
          </>
  )
}