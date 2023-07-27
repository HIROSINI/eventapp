import React from 'react'
import { Link } from 'react-router-dom';

export default function Faq() {
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
    <div>
        <p style={{fontWeight:"bold", paddingLeft:"50px"}}>Frequently Asked Questions (FAQ) - iDoEventz</p>
<ol>
<p>
<p className='pri'>What is iDoEventz?</p>
<p>iDoEventz is an online platform that facilitates event management and registration. It allows event organizers to create and promote their events, manage guest lists, and handle ticket sales or registrations efficiently.</p>
</p>
<p>
<p className='pri'>How do I create an event on iDoEventz?</p>
<p>To create an event, you need to sign up for an account on our website. Once you have an account, log in, and click on "Create Event." Follow the simple steps to enter your event details, such as event name, date, location, description, and ticketing options.</p>
</p>
<p>
<p className='pri'>Do I need to pay any fees to create an event on iDoEventz?</p>
<p>Creating an event on iDoEventz is free! You can set up your event and start promoting it without any upfront costs. However, there may be transaction fees associated with ticket sales or registrations. These fees will be clearly communicated to you during the event setup process.</p>
</p>
<p>
<p className='pri'>How can attendees register for my event?</p>
<p>Attendees can register for your event through the event page on iDoEventz. They can click on the "Register" or "Get Tickets" button, select the desired ticket type or registration option, and complete the necessary information. After payment (if applicable), they will receive a confirmation email.</p>
</p>
<p>
<p className='pri'>Can I customize the event registration process?</p>
<p>
Yes, you can customize the event registration process to suit your needs. iDoEventz allows you to set various ticket types, registration options, and pricing. You can also collect additional information from attendees, such as dietary preferences or t-shirt sizes.</p>
</p>
<p>
<p className='pri'>How do I manage my event's guest list?</p>
<p>You can easily manage your event's guest list through the iDoEventz dashboard. As attendees register or buy tickets, their details will be added to your guest list. You can view, edit, or export the guest list as needed.</p>
</p>
<p>
<p className='pri'>What payment options does iDoEventz support?</p>
<p>iDoEventz supports various payment options to cater to your attendees' preferences. We accept credit card payments through secure payment gateways. Additionally, you can enable PayPal or other payment methods based on your location.</p>
</p>
<p>
<p className='pri'>Is my personal information safe on iDoEventz?</p>
<p>Yes, we take data privacy seriously. We implement security measures to protect your personal information in accordance with our Privacy Policy. For payment transactions, we use encrypted connections and do not store sensitive payment information on our servers.</p>
</p>
<p>
<p className='pri'>Can I promote my event on iDoEventz?</p>
<p>Absolutely! iDoEventz provides tools to help you promote your event. You can share your event page on social media, send invitations to your contacts, and use our built-in communication features to interact with attendees.</p>
</p>
<p>
<p className='pri'>How can I contact iDoEventz support?</p>
<p>If you have any questions or need assistance, you can reach our customer support team by using the contact form on our website, emailing [support@idoeventz.com], or calling [Phone Number]. We're here to help!</p>
</p>
</ol>
<p style={{marginLeft:"50px"}}>We hope these FAQs have answered some of your questions. If you need further assistance, feel free to contact us. Thank you for choosing iDoEventz for your event management needs!</p>
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
