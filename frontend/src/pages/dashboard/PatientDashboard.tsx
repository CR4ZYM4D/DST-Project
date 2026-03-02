import React from 'react';
import { Activity, Heart, Thermometer, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { mockVitals } from '../../services/mockData';
import Chatbot from '../../components/patient/Chatbot';

const PatientDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Vitals Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-red-50 text-red-500 rounded-lg"><Heart size={20} /></div>
               <span className="text-sm text-text-gray font-medium">Heart Rate</span>
             </div>
             <div className="flex items-baseline gap-2">
               <h3 className="text-3xl font-bold text-secondary">72</h3>
               <span className="text-sm text-text-gray">bpm</span>
             </div>
             <p className="text-xs text-green-600 mt-2">Normal range</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><Activity size={20} /></div>
               <span className="text-sm text-text-gray font-medium">Blood Pressure</span>
             </div>
             <div className="flex items-baseline gap-2">
               <h3 className="text-3xl font-bold text-secondary">120/80</h3>
               <span className="text-sm text-text-gray">mmHg</span>
             </div>
             <p className="text-xs text-green-600 mt-2">Optimal</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-orange-50 text-orange-500 rounded-lg"><Thermometer size={20} /></div>
               <span className="text-sm text-text-gray font-medium">Temperature</span>
             </div>
             <div className="flex items-baseline gap-2">
               <h3 className="text-3xl font-bold text-secondary">98.6</h3>
               <span className="text-sm text-text-gray">°F</span>
             </div>
             <p className="text-xs text-green-600 mt-2">Normal</p>
          </div>
        </div>

        {/* Live Monitoring Chart */}
        <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg text-secondary">Heart Rate History</h3>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Clock size={14} />
              Last 24 Hours
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockVitals}>
                <defs>
                  <linearGradient id="colorHeart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" hide />
                <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#ef4444" fillOpacity={1} fill="url(#colorHeart)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right Column: Chatbot */}
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default PatientDashboard;
