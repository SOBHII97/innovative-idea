import Admin from '../Database/models/Admin.js';
import Event from '../Database/models/Event.js';
import Message from '../Database/models/Message.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config.js';

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, { expiresIn: '7d' });
};

// @desc    Admin Login
// @route   POST /api/admin/login
export const loginAdmin = async (req, res) => {
  let { email, password } = req.body;

  try {
    email = String(email || '').toLowerCase();
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(admin._id);

    res.status(200).json({
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
      },
    });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create new Admin
// @route   POST /api/admin/create
export const createAdmin = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const normalizedEmail = email.toLowerCase();
    const exists = await Admin.findOne({ email: normalizedEmail });
    if (exists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const newAdmin = await Admin.create({
      email: normalizedEmail,
      password,
      name,
    });

    res.status(201).json({ message: 'Admin created successfully' });
  } catch (err) {
    console.error('Create admin error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Change Admin Password
// @route   PUT /api/admin/change-password
export const changePassword = async (req, res) => {
  const adminId = req.admin?.id;
  const { currentPassword, newPassword } = req.body;

  try {
    const admin = await Admin.findById(adminId);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Current password incorrect' });

    admin.set('password', newPassword); // Use Mongoose's set method to update password
    await admin.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Password change error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};


// @desc    Get current admin
// @route   GET /api/admin/me
export const getCurrentAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin?.id).select('-password');
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    res.json(admin);
  } catch (err) {
    console.error('Get current admin error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get Admin Dashboard Stats
// @route   GET /api/admin/stats
export const getAdminStats = async (req, res) => {
  try {
    const totalAdmins = await Admin.countDocuments();
    const totalEvents = await Event.countDocuments();
    const totalMessages = await Message.countDocuments();

    res.json({ totalAdmins, totalEvents, totalMessages });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load stats', error: err.message });
  }
};

// @desc    Delete Admin by ID
// @route   DELETE /api/admin/:id
export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    if (req.admin?.id === id) {
      return res.status(400).json({ message: "You can't delete yourself" });
    }

    const deleted = await Admin.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.json({ message: 'Admin deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete admin', error: err.message });
  }
};
