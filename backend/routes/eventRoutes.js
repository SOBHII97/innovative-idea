import express from 'express';
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js';
import protect from '../middlewares/auth.js';

const router = express.Router();

// Protected admin routes
router.post('/', protect, createEvent);       // Create event
router.put('/:id', protect, updateEvent);    // Update event
router.delete('/:id', protect, deleteEvent); // Delete event

// Public routes
router.get('/', getAllEvents);                // Get all events
router.get('/:id', getEventById);            // Get single event

export default router;