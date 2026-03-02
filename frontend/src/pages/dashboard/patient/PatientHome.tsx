import React from 'react';
import { Calendar, Activity, FileText, ChevronRight, Sun } from 'lucide-react';

const PatientHome = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <Sun size={20} />
            <span className="font-medium">Good Morning, Sarah</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">How are you feeling today?</h2>
          <p className="max-w-md opacity-90 mb-6">Don't forget to log your daily symptoms for better health tracking.</p>
          <button className="bg-white text-primary px-6 py-2 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
            Check-in Now
          </button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
          <Activity size={300} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Next Appointment */}
        <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-50">
          <div className="flex items-center gap-3 mb-4 text-secondary">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Calendar size={20} />
            </div>
            <h3 className="font-semibold">Next Appointment</h3>
          </div>
          <div className="mb-4">
            <p className="text-2xl font-bold text-secondary">Tomorrow</p>
            <p className="text-primary font-medium">10:00 AM</p>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-secondary">Dr. Robert Henry</p>
              <p className="text-xs text-text-gray">Cardiologist</p>
            </div>
          </div>
        </div>

        {/* Daily Tip */}
        <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-50 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-secondary mb-2">Daily Health Tip</h3>
            <p className="text-sm text-text-gray leading-relaxed">
              "Stay hydrated! Drinking enough water helps maintain blood pressure and kidney function."
            </p>
          </div>
          <button className="text-primary text-sm font-medium flex items-center gap-1 mt-4 hover:gap-2 transition-all">
            Read More <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Recent Reports List */}
      <div className="bg-white rounded-3xl shadow-card border border-gray-50 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg text-secondary">Recent Reports</h3>
          <button className="text-primary text-sm font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-lg text-blue-600 shadow-sm">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-secondary">Blood Work Analysis</h4>
                  <p className="text-xs text-text-gray">Feb 12, 2025 • Dr. Henry</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientHome;
