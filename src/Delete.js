import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Organizer.css';

function Delete() {
  // ... existing state variables ...

  // Function to delete the event details by ID
  const handleDeleteEvent = async () => {
    const eventIdToDelete = prompt('Please enter the Event ID to delete:');
    if (eventIdToDelete) {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8181/delete/eventdetails/${eventIdToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'cache-control': 'no-cache',
            },
          }
        );
        if (response.status === 200) {
          alert('Event details deleted successfully!');
          // Optionally, you can update the state to clear the form fields or refresh the event list
          // setAllDetails([...updatedEventList]);
          // setId('');
          // setOrganizer('');
          // setEventname('');
          // setFdate('');
          // setTodate('');
          // setFromtime('');
          // setTotime('');
          // setVenue('');
          // setDescription('');
          // setAgenda('');
          // setCapacity('');
          // setPrice('');
        }
      } catch (error) {
        console.error('Event deletion failed:', error);
      }
    } else {
      alert('Event ID cannot be empty. Deletion canceled.');
    }
  };

  return (
    <>
      {/* ... existing JSX ... */}

      <button type="button" className="orgdelete" onClick={handleDeleteEvent}>
        Delete Event
      </button>

      {/* ... existing JSX ... */}
    </>
  );
}

export default Delete;
