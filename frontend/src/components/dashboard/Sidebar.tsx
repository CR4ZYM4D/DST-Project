import React from 'react';
import { Users, Activity, Settings, LogOut, MessageSquare, Home, ClipboardList, Thermometer } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserRole } from '../../types';

interface SidebarProps {
  role: UserRole;
}

const Sidebar = ({ role }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/dashboard/doctor' && location.pathname === '/dashboard/doctor') return true;
    if (path !== '/dashboard/doctor' && location.pathname.startsWith(path)) return true;
    if (path === '/dashboard/patient' && location.pathname === '/dashboard/patient') return true;
    return false;
  };

  const menuItems = role === 'doctor' ? [
    { icon: Home, label: 'Overview', path: '/dashboard/doctor' },
    { icon: Users, label: 'Patients', path: '/dashboard/doctor/patients' },
    { icon: Activity, label: 'Monitoring', path: '/dashboard/doctor/monitoring' },
  ] : [
    { icon: Home, label: 'Home', path: '/dashboard/patient' },
    { icon: ClipboardList, label: 'My Records', path: '/dashboard/patient/records' },
    { icon: Thermometer, label: 'Check-in', path: '/dashboard/patient/checkin' },
    { icon: MessageSquare, label: 'Assistant', path: '/dashboard/patient/chat' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed h-full hidden md:flex flex-col z-20">
      <div className="p-6 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
         <div className="text-primary font-bold text-2xl">Nidaan</div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="px-4 mb-4 text-xs font-semibold text-text-gray uppercase tracking-wider">
          {role === 'doctor' ? 'Clinical Workspace' : 'Patient Portal'}
        </div>
        
        {menuItems.map((item) => (
          <div 
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition-colors ${
              isActive(item.path) 
                ? 'bg-primary/10 text-primary' 
                : 'text-secondary hover:bg-gray-50'
            }`}
          >
            <item.icon size={20} />
            {item.label}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-gray-50 rounded-xl font-medium cursor-pointer">
          <Settings size={20} />
          Settings
        </div>
        <div 
          onClick={() => navigate('/login')}
          className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium cursor-pointer mt-1"
        >
          <LogOut size={20} />
          Logout
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
