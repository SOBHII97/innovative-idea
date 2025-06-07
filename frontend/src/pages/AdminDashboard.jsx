// src/pages/AdminDashboard.jsx
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary">Admin Dashboard</h1>
        <p className="text-gray-700 mb-10">Welcome! Select an admin action below.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to="/admin/events" className="admin-card">
            📅 Manage Events
          </Link>
          <Link to="/admin/create-admin" className="admin-card">
            ➕ Create Admin
          </Link>
          <Link to="/admin/change-password" className="admin-card">
            🔐 Change Password
          </Link>
          <Link to="/admin/delete-admin" className="admin-card">
            ❌ Delete Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
