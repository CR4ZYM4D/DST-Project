import React from 'react';
import { User, Lock, Bell, Shield, Save } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-secondary mb-6">Account Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-medium transition-colors">
            <User size={20} />
            Profile Information
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-secondary hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <Lock size={20} />
            Security & Password
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-secondary hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <Bell size={20} />
            Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-secondary hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <Shield size={20} />
            Privacy
          </button>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-2 bg-white rounded-3xl shadow-card border border-gray-50 p-8">
          <h3 className="text-xl font-semibold text-secondary mb-6">Profile Information</h3>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl font-bold">
              U
            </div>
            <div>
              <button className="px-4 py-2 bg-white border border-gray-200 text-secondary rounded-xl text-sm font-medium hover:bg-gray-50 mb-2">
                Change Avatar
              </button>
              <p className="text-xs text-text-gray">JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">First Name</label>
                <input type="text" defaultValue="Current" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Last Name</label>
                <input type="text" defaultValue="User" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Email Address</label>
                <input type="email" defaultValue="user@nidaan.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Phone Number</label>
                <input type="tel" defaultValue="+1 234 567 8900" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary text-sm" />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-end">
              <button type="button" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
