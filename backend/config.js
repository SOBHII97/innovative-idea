// config.js
import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  companyEmail: process.env.COMPANY_EMAIL,
  emailPass: process.env.EMAIL_PASS
};

export default config;