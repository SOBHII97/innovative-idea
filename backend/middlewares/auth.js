import jwt from 'jsonwebtoken';
import config from '../config.js';

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];

    if (!config.jwtSecret) { // Changed to config.jwtSecret
      console.error('JWT_SECRET is not defined in config.');
      return res.status(500).json({ error: 'Server configuration error.' });
    }

    const decoded = jwt.verify(token, config.jwtSecret);

    req.admin = { id: decoded.id };
    next();

  } catch (err) {
    console.error('JWT verification failed:', err.message);
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
};

export default protect ;
