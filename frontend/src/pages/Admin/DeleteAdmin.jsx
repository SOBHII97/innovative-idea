import React, { useState, useEffect } from 'react';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const DeleteAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const { data } = await axios.get('/admin/admins');
        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);
        const currentAdminId = decoded.id;
        
      const filtered = data.admins.filter((admin) => admin._id !== currentAdminId);
      setAdmins(filtered);
    } catch (error) {
      toast.error('Failed to fetch admins');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (adminId) => {
    if (!window.confirm('Are you sure you want to delete this admin?')) return;

    try {
      await axios.delete(`/admin/${adminId}`);
      toast.success('Admin deleted successfully');
      fetchAdmins();
    } catch (error) {
      toast.error('Failed to delete admin');
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Delete Admin</h1>

        {admins.length === 0 ? (
          <p className="text-center text-gray-500">No other admins found.</p>
        ) : (
          <div className="grid gap-4">
            {admins.map((admin) => (
              <div key={admin._id} className="bg-white p-4 rounded-lg shadow border flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{admin.name}</h3>
                  <p className="text-sm text-gray-500">{admin.email}</p>
                </div>
                <button
                  onClick={() => handleDelete(admin._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteAdmin;
