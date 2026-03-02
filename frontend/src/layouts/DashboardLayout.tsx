import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import { UserRole } from '../types';

interface Props {
  role: UserRole;
}

const DashboardLayout = ({ role }: Props) => {
  // Mock User
  const user = {
    id: '1',
    name: role === 'admin' ? 'System Admin' : role === 'doctor' ? 'Robert Henry' : 'Sarah Jones',
    role: role,
    phone: '1234567890'
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <Sidebar role={role} />
      <main className="flex-1 md:ml-64 p-8">
        <Header user={user} />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
