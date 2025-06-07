import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';

const EventsAdmin = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/events');
      setEvents(response.data.events || []);
    } catch (error) {
      toast.error('Error fetching events');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;

    try {
      await axios.delete(`/events/${id}`);
      toast.success('Event deleted successfully');
      fetchEvents();
    } catch (error) {
      toast.error('Error deleting event');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-green-700 mb-4">Events Management</h1>

        {/* Add Button */}
        <button
          className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
          onClick={() => navigate('/admin/events/add')}
          disabled={loading}
        >
          + Add New Event
        </button>

        {/* Events Table */}
        <div className="overflow-x-auto bg-white rounded shadow">
          {loading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : (
            <table className="min-w-full text-sm text-left">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center p-4 text-gray-500">No events available.</td>
                  </tr>
                ) : (
                  events.map((event, index) => (
                    <tr key={event._id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{event.title}</td>
                      <td className="p-3">{new Date(event.date).toLocaleDateString()}</td>
                      <td className="p-3">{event.location}</td>
                      <td className="p-3">
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                          event.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : event.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : event.status === 'Completed'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-200 text-gray-600'
                        }`}>
                          {event.status || 'Pending'}
                        </span>
                      </td>
                      <td className="p-3 space-x-2">
                        <button
                          className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 disabled:opacity-50"
                          onClick={() => navigate(`/admin/events/edit/${event._id}`)}
                          disabled={loading}>
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
                          onClick={() => handleDelete(event._id)}
                          disabled={loading}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsAdmin;
