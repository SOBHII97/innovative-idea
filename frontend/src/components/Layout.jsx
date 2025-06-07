import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import AdminQuickActions from './AdminQuickActions';

const Layout = ({ children }) => {
  const location = useLocation();
  const adminPagesWithActions = [
    '/admin/products',
    '/admin/create-admin',
    '/admin/events',
    '/admin/change-password',
  ];

  const showAdminActions = adminPagesWithActions.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden relative">
      <Navbar />
      <main className="pt-24">
        {children}
        {showAdminActions && <AdminQuickActions />}
      </main>
    </div>
  );
};

export default Layout;
