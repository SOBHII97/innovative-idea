import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const AdminQuickActions = () => {
  const { isOwner } = useAuth();

  if (!isOwner()) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-2">
      <Link to="/admin" className="bg-green-600 text-white px-4 py-2 rounded shadow block text-sm">Dashboard</Link>
      <Link to="/admin/delete-admin" className="bg-green-600 text-white px-4 py-2 rounded shadow block text-sm">Delete Admin</Link>
      <Link to="/admin/events" className="bg-green-600 text-white px-4 py-2 rounded shadow block text-sm">Events</Link>
      <Link to="/admin/create-admin" className="bg-green-600 text-white px-4 py-2 rounded shadow block text-sm">Create Admin</Link>
      <Link to="/admin/change-password" className="bg-green-600 text-white px-4 py-2 rounded shadow block text-sm">Change Password</Link>
    </div>
  );
};


export default AdminQuickActions;
