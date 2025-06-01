import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/hotelOwner/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* ✅ Top Navbar for hotel owner layout */}
      <Navbar />

      {/* ✅ Sidebar + Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 pt-6 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
