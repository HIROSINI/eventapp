import React from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <><nav class="nav0">
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
    <div className='pri1'>
        <p style={{fontWeight:"bold"}}>Terms and Conditions for iDoEventz</p>
<p>Welcome to iDoEventz ("we," "us," or "our"). These Terms and Conditions govern your access to and use of the iDoEventz website and services. By using our website or services, you agree to comply with these terms. If you do not agree with any part of these terms, please refrain from using iDoEventz.</p>
<ol>
<p className='pri'>Use of Services:</p>
</ol>
<p>a. Eligibility: You must be at least 18 years old to use iDoEventz and have the legal capacity to enter into a contract. By using our services, you represent and warrant that you meet these eligibility requirements.</p>
<p>b. Account Registration: To access certain features or services, you may be required to create an account. You are responsible for providing accurate and complete information during registration and keeping your account credentials secure. You agree not to share your account credentials with third parties.</p>
<p>c. User Conduct: You agree to use iDoEventz in compliance with all applicable laws, regulations, and these Terms and Conditions. You will not engage in any activities that may harm, interfere with, or compromise the website's integrity or the experience of other users.</p>
<ol start="2">
<p className='pri'>Event Management:</p>
</ol>
<p>a. Event Creation: As an account holder, you may create events using our platform. You are solely responsible for the accuracy and completeness of the event details provided. You must also ensure that your events comply with all applicable laws and regulations.</p>
<p>b. Communication: iDoEventz provides communication tools to facilitate event-related interactions between event organizers and attendees. You agree to use these tools responsibly and refrain from sending spam, unsolicited messages, or any content that may be considered offensive or inappropriate.</p>
<p>c. Payment and Fees: If you use our services to collect payments for events, you acknowledge and agree that iDoEventz may charge transaction fees or other applicable charges. These fees will be clearly communicated to you during the payment process.</p>
<ol start="3">
<p className='pri'>Intellectual Property:</p>
</ol>
<p>a. Ownership: iDoEventz and its content, including but not limited to text, graphics, logos, images, videos, and software, are protected by intellectual property rights and belong to us or our licensors. You agree not to use, reproduce, modify, or distribute any content from iDoEventz without our prior written consent.</p>
<p>b. User Content: By posting or submitting any content to iDoEventz, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, distribute, and display the content for the purpose of providing our services.</p>
<ol start="4">
<p className='pri'>Privacy:</p>
</ol>
<p>Our use of your personal information is governed by our Privacy Policy, which forms an integral part of these Terms and Conditions. Please review our Privacy Policy to understand how we collect, use, and safeguard your information.</p>
<ol start="5">
<p className='pri'>Disclaimer of Warranties:</p>
</ol>
<p>iDoEventz is provided on an "as-is" and "as available" basis. We make no representations or warranties of any kind, whether express or implied, regarding the website or its content. We do not guarantee the accuracy, completeness, or reliability of any information on iDoEventz. Your use of the website is at your own risk.</p>
<ol start="6">
<p className='pri'>Limitation of Liability:</p>
</ol>
<p>To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of iDoEventz or any content provided on the website.</p>
<ol start="7">
<p className='pri'>Indemnification:</p>
</ol>
<p>You agree to indemnify and hold iDoEventz, its affiliates, officers, directors, employees, and agents harmless from any claims, liabilities, losses, damages, costs, or expenses, including attorney's fees, arising out of or related to your use of our services or any violation of these Terms and Conditions.</p>
<ol start="8">
<p className='pri'>Termination:</p>
</ol>
<p>We reserve the right to suspend or terminate your access to iDoEventz at any time and for any reason, without prior notice. Upon termination, these Terms and Conditions will also terminate, and you must cease all use of iDoEventz.</p>
<ol start="9">
<p className='pri'>Modifications:</p>
</ol>
<p>We may update these Terms and Conditions from time to time. Any changes will be effective upon posting the revised terms on iDoEventz. Your continued use of the website after such changes will constitute your acceptance of the revised terms.</p>
<ol start="10">
<p className='pri'>Governing Law and Jurisdiction:</p>
</ol>
<p>These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflicts of law principles. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your Country/State].</p>
<p>If you have any questions or concerns about these Terms and Conditions, please contact us at [Contact Email/Address/Phone].</p>
<p>By using iDoEventz, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.</p>

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
