import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { toast } from 'react-toastify';
import logo from '../assets/Logo-1-removebg-preview.png';
import { useAuth } from '../context/AuthContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle visibility
  const { login } = useAuth();
  const navigate = useNavigate();

  // 🧠  login handler
    const handleLogin = async (e) => {
      e.preventDefault();

      const success = await login(email, password);

      if (success) {
        navigate('/admin');
      }
    };


  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/10 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <div className="text-center">
          <img src={logo} alt="Logo" className="h-20 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-greenMain">Login</h2>
          <p className="text-gray-600 text-sm">Welcome! Enter your credentials to continue.</p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-greenMain"
            />
          </div>

          {/* Password input with show/hide toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-greenMain pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
