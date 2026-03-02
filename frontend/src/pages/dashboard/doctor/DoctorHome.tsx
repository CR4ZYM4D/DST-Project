import React from 'react';
import { Users, Activity, Brain, AlertTriangle, Clock, FileText, CheckCircle } from 'lucide-react';
import { mockActivityFeed } from '../../../services/mockData';

const StatCard = ({ icon: Icon, label, value, color, subtext }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50 flex items-center gap-4">
    <div className={`p-3 rounded-xl ${color}`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-text-gray text-xs font-medium uppercase">{label}</p>
      <h3 className="text-2xl font-bold text-secondary">{value}</h3>
      {subtext && <p className="text-xs text-text-gray mt-1">{subtext}</p>}
    </div>
  </div>
);

const DoctorHome = () => {
  return (
    <div className="space-y-8">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Users} label="Total Patients" value="1,240" color="bg-blue-50 text-blue-600" subtext="+12 this week" />
        <StatCard icon={Activity} label="Active Cases" value="86" color="bg-purple-50 text-purple-600" subtext="14 critical" />
        <StatCard icon={AlertTriangle} label="Critical Alerts" value="3" color="bg-red-50 text-red-600" subtext="Action required" />
        <StatCard icon={Brain} label="AI Analyses" value="128" color="bg-green-50 text-green-600" subtext="98% accuracy" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-card border border-gray-50 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg text-secondary">Recent Activity</h3>
            <button className="text-primary text-sm font-medium">View All</button>
          </div>
          <div className="space-y-6">
            {mockActivityFeed.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.type === 'alert' ? 'bg-red-100 text-red-600' : 
                  item.type === 'appointment' ? 'bg-blue-100 text-blue-600' : 
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.type === 'alert' ? <AlertTriangle size={18} /> : 
                   item.type === 'appointment' ? <Clock size={18} /> : 
                   <FileText size={18} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-secondary text-sm">{item.title}</h4>
                    <span className="text-xs text-text-gray">{item.time}</span>
                  </div>
                  <p className="text-sm text-text-gray mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="bg-white rounded-3xl shadow-card border border-gray-50 p-6">
          <h3 className="font-semibold text-lg text-secondary mb-6">Priority Alerts</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} className="text-red-600" />
                <span className="font-bold text-red-700 text-sm">Critical: Patient #8839</span>
              </div>
              <p className="text-xs text-red-600 mb-3">Heart rate spike detected (140 bpm). Immediate attention required.</p>
              <button className="w-full py-2 bg-white border border-red-200 text-red-600 rounded-lg text-xs font-bold hover:bg-red-50">
                View Patient
              </button>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-yellow-600" />
                <span className="font-bold text-yellow-700 text-sm">Follow-up Overdue</span>
              </div>
              <p className="text-xs text-yellow-600">Sarah Jones missed her scheduled appointment.</p>
            </div>

             <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={16} className="text-blue-600" />
                <span className="font-bold text-blue-700 text-sm">Lab Results Ready</span>
              </div>
              <p className="text-xs text-blue-600">Blood work for Michael Chen is available for review.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
