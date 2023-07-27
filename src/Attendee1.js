import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Attendee.css';

function Attendee1() {
  const [allDetails, setAllDetails] = useState([]);

  const fetchAllDetails = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://127.0.0.1:8181/show/eventdetails', {
        headers: {
          Authorization: `Bearer ${token}`,
          'cache-control': 'no-cache',
        },
      });

      const allDetails = response.data;
      setAllDetails(allDetails);
    } catch (error) {
      console.error('Error fetching all details:', error);
    }
  };

  useEffect(() => {
    fetchAllDetails();
  }, []);

  return (
    <>
      <nav className="nav0">
        {/* ... (rest of the navigation code) */}
      </nav>
      <div className="dropdown">
        {/* ... (rest of the dropdown code) */}
      </div>
      <div className="attendee-dis">
        {allDetails &&
          allDetails.map((eventData) => (
            <div key={eventData.eventid} className="event-card">
              <div className="event-details">
                <h2>{eventData.eventname}</h2>
                <p>Event - ID: {eventData.eventid}</p>
                <p>Organizer: {eventData.organizername}</p>
                <p>Start Date: {eventData.startdate}</p>
                <p>End Date: {eventData.enddate}</p>
                <p>Start Time: {eventData.starttime}</p>
                <p>End Time: {eventData.endtime}</p>
                <p>Venue: {eventData.venue}</p>
                <p>Description: {eventData.eventdescription}</p>
                <p>Price Per Person: {eventData.priceperperson}</p>
              </div>
              <div className="event-actions">
                <Link
                  to={`/Ticket?data1=${encodeURIComponent(
                    eventData.priceperperson
                  )}&data2=${encodeURIComponent(eventData.eventname)}`}
                >
                  <button className="view-button">View Details</button>
                </Link>
                {/* Add other action buttons here (e.g., "Register", "Join", etc.) */}
              </div>
            </div>
          ))}
      </div>
      <div className="footer">
        {/* ... (rest of the footer code) */}
      </div>
    </>
  );
}

export default Attendee1;
