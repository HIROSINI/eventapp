import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Attendee.css';
import axios from 'axios'; // Import Axios

export default function Select() {
    const [eventDetails, setEventDetails] = useState(null);
    useEffect(() => {
        // Define a function to fetch the event details
        const fetchEventDetails = async () => {
          try {
            // Make the HTTP GET request to your API endpoint
            const response = await axios.get('/api/events'); // Replace '/api/events' with your actual API endpoint
      
            // Set the event details in the state
            setEventDetails(response.data);
          } catch (error) {
            console.error('Error fetching event details:', error);
          }
        };
      
        // Call the function to fetch the event details
        fetchEventDetails();
      }, []);
  return (
    <>
    {eventDetails ? (
      <>
        <Link to="/Ticket">
          <h2>{eventDetails.eventname}</h2>
        </Link>
        <p>Organizer: {eventDetails.organizer}</p>
        <p>Event Name: {eventDetails.eventname}</p>
        {/* Other event details */}
        {/* ... */}
      </>
    ) : (
      <p>Loading event details...</p>
    )}
    </>
  )
}
