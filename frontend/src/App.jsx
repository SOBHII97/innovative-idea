import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Events from './pages/Events';
import Login from './pages/Login';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import EventsAdmin from './pages/Admin/EventsAdmin.jsx';
import CreateAdmin from './pages/Admin/CreateAdmin.jsx';
import ChangePassword from './pages/Admin/ChangePassword.jsx';
import DeleteAdmin from './pages/Admin/DeleteAdmin.jsx';
import AddEvent from './pages/Admin/AddEvent.jsx';
import EditEvent from './pages/Admin/EditEvent.jsx';

// Product Pages
import Chemistry from './pages/PRODUCT/LAP-DEVICES/chemistry.jsx';
import Cbc from './pages/PRODUCT/LAP-DEVICES/cbc.jsx';
import Pcr from './pages/PRODUCT/LAP-DEVICES/pcr.jsx';
import Rapid from './pages/PRODUCT/LAP-DEVICES/rapid.jsx';
import Ultrasound from './pages/PRODUCT/RADIO/Ultrasound.jsx';
import Hypermix from './pages/PRODUCT/MEDICAL/hypermix.jsx';
import Q7 from './pages/PRODUCT/RADIO/Q7.jsx';

import Layout from './components/Layout';
import OwnerRoute from './routing/OwnerRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />

          {/* Product Routes */}
          <Route path="/products/lab-devices/chemistry" element={<Layout><Chemistry /></Layout>} />
          <Route path="/products/lab-devices/cbc" element={<Layout><Cbc /></Layout>} />
          <Route path="/products/lab-devices/pcr" element={<Layout><Pcr /></Layout>} />
          <Route path="/products/lab-devices/rapid-test" element={<Layout><Rapid /></Layout>} />
          <Route path="/products/radiology/ultrasound" element={<Layout><Ultrasound /></Layout>} />
          <Route path="/products/medical/hypermix" element={<Layout><Hypermix /></Layout>} />
          <Route path="/products/radiology/q7" element={<Layout><Q7 /></Layout>} />

          {/* Admin Protected Routes */}
          <Route path="/admin" element={<OwnerRoute><Layout><AdminDashboard /></Layout></OwnerRoute>} />
          <Route path="/admin/events" element={<OwnerRoute><Layout><EventsAdmin /></Layout></OwnerRoute>} />
          <Route path="/admin/events/add" element={<OwnerRoute><Layout><AddEvent /></Layout></OwnerRoute>} />
          <Route path="/admin/events/edit/:id" element={<OwnerRoute><Layout><EditEvent /></Layout></OwnerRoute>} />
          <Route path="/admin/create-admin" element={<OwnerRoute><Layout><CreateAdmin /></Layout></OwnerRoute>} />
          <Route path="/admin/change-password" element={<OwnerRoute><Layout><ChangePassword /></Layout></OwnerRoute>} />
          <Route path="/admin/delete-admin" element={<OwnerRoute><Layout><DeleteAdmin /></Layout></OwnerRoute>} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
