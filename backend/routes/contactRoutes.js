// routes/contactRoutes.js
import express from 'express';
import { submitContactForm } from '../controllers/contactController.js';

const router = express.Router();

// Route: POST /api/contact
// Description: Submit a contact form
router.post('/', submitContactForm);

export default router;
