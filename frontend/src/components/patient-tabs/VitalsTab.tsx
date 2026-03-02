import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { mockVitals, mockBPData } from '../../services/mockData';

const VitalsTab = () => {
  return (
    <div className="space-y-6">
      {/* Heart Rate */}
      <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-secondary">Heart Rate (24h)</h3>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Normal Rhythm</span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockVitals}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="time" hide />
              <YAxis domain={['dataMin - 10', 'dataMax + 10']} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#ef4444" 
                strokeWidth={3} 
                dot={false} 
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Blood Pressure */}
      <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-secondary">Blood Pressure</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Optimal</span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockBPData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="time" hide />
              <YAxis domain={[60, 160]} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <Line name="Systolic" type="monotone" dataKey="systolic" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <Line name="Diastolic" type="monotone" dataKey="diastolic" stroke="#93c5fd" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VitalsTab;
