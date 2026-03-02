import React from 'react';
import { Bell, Search } from 'lucide-react';
import { User } from '../../types';

const Header = ({ user }: { user: User }) => {
  return (
    <header className="flex justify-between items-center mb-8 bg-white/50 backdrop-blur-sm sticky top-0 z-10 py-4 px-1 rounded-xl">
      <div>
        <h1 className="text-2xl font-bold text-secondary">
          {user.role === 'doctor' ? `Dr. ${user.name}` : `Welcome, ${user.name}`}
        </h1>
        <p className="text-text-gray text-sm">
          {user.role === 'doctor' ? 'Chief Resident • Cardiology' : 'Patient ID: #883920'}
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
          <Search size={18} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent outline-none text-sm text-secondary w-48"
          />
        </div>

        <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100 relative cursor-pointer hover:bg-gray-50">
          <Bell size={20} className="text-secondary" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">
          {user.name.charAt(0)}
        </div>
      </div>
    </header>
  );
};

export default Header;
