import express from 'express';
import {
  loginAdmin,
  createAdmin,
  changePassword,
  getCurrentAdmin,
  getAdminStats,
  deleteAdmin
} from '../controllers/adminController.js';
import protect from '../middlewares/auth.js';

const router = express.Router();

// Public Route
router.post('/login', loginAdmin);

// Protected Routes
router.post('/create', protect, createAdmin);
router.put('/change-password', protect, changePassword);
router.get('/me', protect, getCurrentAdmin);
router.get('/stats', protect, getAdminStats);

// ✅ Get all admins (for admin list in dashboard)
router.get('/admins', protect, async (req, res) => {
  try {
    const admins = await (await import('../Database/models/Admin.js')).default.find().select('-password');
    res.json({ admins });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch admins', error: err.message });
  }
});

// ✅ Delete admin by ID
router.delete('/:id', protect, deleteAdmin);

export default router;
