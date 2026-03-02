import React from 'react';
import { Users, ShieldCheck, Cpu, Server, Activity, ArrowUpRight } from 'lucide-react';

const AdminHome = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-secondary">Platform Overview</h2>
          <p className="text-text-gray text-sm mt-1">Monitor system health, users, and AI models.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users size={24} /></div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              +12% <ArrowUpRight size={14} />
            </span>
          </div>
          <p className="text-text-gray text-xs font-medium uppercase">Total Patients</p>
          <h3 className="text-2xl font-bold text-secondary">8,429</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><ShieldCheck size={24} /></div>
            <span className="flex items-center text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-lg">
              5 Pending
            </span>
          </div>
          <p className="text-text-gray text-xs font-medium uppercase">Verified Doctors</p>
          <h3 className="text-2xl font-bold text-secondary">142</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl"><Cpu size={24} /></div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              99.8% Uptime
            </span>
          </div>
          <p className="text-text-gray text-xs font-medium uppercase">AI Inferences (24h)</p>
          <h3 className="text-2xl font-bold text-secondary">1,204</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Server size={24} /></div>
            <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              Healthy
            </span>
          </div>
          <p className="text-text-gray text-xs font-medium uppercase">System Status</p>
          <h3 className="text-2xl font-bold text-secondary">Online</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-card border border-gray-50 p-6">
          <h3 className="font-semibold text-lg text-secondary mb-6">System Activity</h3>
          <div className="space-y-6">
            {[
              { title: 'New Doctor Registration', desc: 'Dr. Emily Chen requested verification.', time: '10 mins ago', icon: ShieldCheck, color: 'text-purple-600 bg-purple-50' },
              { title: 'Model Retraining Complete', desc: 'Pneumonia Classifier v2.1 finished training.', time: '2 hours ago', icon: Cpu, color: 'text-green-600 bg-green-50' },
              { title: 'High Server Load', desc: 'API gateway experienced a spike in traffic.', time: '5 hours ago', icon: Activity, color: 'text-orange-600 bg-orange-50' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`p-2 rounded-xl flex-shrink-0 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-secondary text-sm">{item.title}</h4>
                  <p className="text-xs text-text-gray mt-1">{item.desc}</p>
                  <span className="text-[10px] text-gray-400 mt-1 block">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl shadow-card border border-gray-50 p-6">
          <h3 className="font-semibold text-lg text-secondary mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-gray-100 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-left group">
              <ShieldCheck className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="font-medium text-secondary">Review Doctors</h4>
              <p className="text-xs text-text-gray mt-1">5 pending approvals</p>
            </button>
            <button className="p-4 border border-gray-100 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-left group">
              <Cpu className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="font-medium text-secondary">Manage Models</h4>
              <p className="text-xs text-text-gray mt-1">View deployed versions</p>
            </button>
            <button className="p-4 border border-gray-100 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-left group">
              <Server className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="font-medium text-secondary">Server Logs</h4>
              <p className="text-xs text-text-gray mt-1">Check system errors</p>
            </button>
            <button className="p-4 border border-gray-100 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-left group">
              <Users className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h4 className="font-medium text-secondary">User Management</h4>
              <p className="text-xs text-text-gray mt-1">Manage patient accounts</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
