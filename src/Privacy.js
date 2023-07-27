import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Privacy.css';

export class Privacy extends Component {
  render() {
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
      <div className='pri1'>
        <p><strong>iDoEventZ</strong></p>
{/* <p>Effective Date: [Date]</p> */}
<p>Thank you for visiting iDoEventz ("we," "us," or "our"). This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our website and services. By accessing or using iDoEventz, you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our website or services.</p>
<ol>
<p className='pri'>Information We Collect:</p>
</ol>
<p>a. Personal Information: When you register for an account or use our services, we may collect personal information, such as your name, email address, contact number, postal address, and other information that you voluntarily provide.</p>
<p>b. Event Information: As part of the services we offer, we may collect event-related information, including event details, date, location, guest lists, and other relevant details.</p>
<p>c. Payment Information: To process payments for our services, we may collect payment-related information, such as credit card numbers or other financial information. However, we do not store sensitive payment information on our servers. All payment transactions are encrypted and securely processed by our third-party payment processors.</p>
<p>d. Log Data: Like many websites, we automatically collect certain information when you visit our website, such as your IP address, browser type, operating system, referring/exit pages, and other usage information.</p>
<p>e. Cookies and Similar Technologies: We use cookies and similar technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us recognize you and improve our services. You can manage your cookie preferences through your browser settings.</p>
<ol start="2">
<p className='pri'>How We Use Your Information:</p>
</ol>
<p>a. To Provide Services: We may use your personal information to offer and deliver our services, manage event registrations, process payments, and communicate with you regarding your account and events.</p>
<p>b. Improve User Experience: Your information helps us understand how you use our website and services, enabling us to improve and optimize our platform.</p>
<p>c. Marketing and Communication: We may send you promotional materials and updates about our services, special offers, and relevant events. You can opt-out of marketing communications at any time.</p>
<p>d. Legal Purposes: We may use your information to comply with applicable laws, regulations, or legal processes.</p>
<ol start="3">
<p className='pri'>Information Sharing and Disclosure:</p>
</ol>
<p>a. Third-Party Service Providers: We may share your information with trusted third-party service providers who assist us in providing our services. These providers are obligated to protect your information and use it solely for the purposes we specify.</p>
<p>b. Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</p>
<p>c. Legal Requirements: We may disclose your information to comply with legal obligations, enforce our terms of service, or protect the rights, safety, or security of iDoEventz, our users, or others.</p>
<ol start="4">
<p className='pri'>Data Security:</p>
</ol>
<p>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission or storage system is completely secure. Please understand that we cannot guarantee the security of your information.</p>
<ol start="5">
<p className='pri'>Third-Party Links:</p>
</ol>
<p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read their privacy policies before providing any personal information.</p>
<ol start="6">
<p className='pri'>Children's Privacy:</p>
</ol>
<p>Our services are not intended for individuals under the age of 18. We do not knowingly collect or solicit personal information from minors. If you are under 18, please do not use iDoEventz or provide any personal information.</p>
<ol start="7">
<p className='pri'>Changes to the Privacy Policy:</p>
</ol>
<p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the revised policy on our website or through other communication methods.</p>
<ol start="8">
<p className='pri'>Contact Us:</p>
</ol>
<p>If you have any questions, concerns, or requests regarding this Privacy Policy or the use of your personal information, please contact us at [Contact Email/Address/Phone].</p>
<p>By using iDoEventz, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.</p>
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
}

export default Privacy