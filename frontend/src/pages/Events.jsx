import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosConfig'; 

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/events');
        setEvents(res.data.events || []);
      } catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading events...
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Coming Soon</h2>
        <p className="text-gray-600 text-lg max-w-xl">
          We're preparing something exciting. Check back later for upcoming events.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Upcoming Events</h1>
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
            <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
            <p className="mt-2 text-gray-700">{event.description}</p>
            <p className="mt-1 text-sm text-gray-500 italic">Location: {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
