// controllers/eventController.js
import Event from '../Database/models/Event.js';

export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (err) {
    res.status(500).json({ 
      error: 'Failed to create event',
      details: err.message 
    });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json({ events }); 
  } catch (err) {
    res.status(500).json({ 
      error: 'Failed to fetch events',
      details: err.message 
    });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ 
      error: 'Failed to fetch event',
      details: err.message 
    });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json({ message: 'Event updated successfully', event });
  } catch (err) {
    res.status(500).json({ 
      error: 'Failed to update event',
      details: err.message 
    });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ 
      error: 'Failed to delete event',
      details: err.message 
    });
  }
};