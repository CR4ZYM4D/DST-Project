import React from 'react';
import { FileText, Download, Eye, Search } from 'lucide-react';

const RecordCard = ({ title, date, doctor }: any) => (
  <div className="bg-white p-4 rounded-2xl shadow-card border border-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
        <FileText size={24} />
      </div>
      <div>
        <h4 className="font-medium text-secondary">{title}</h4>
        <p className="text-xs text-text-gray">{date} • {doctor}</p>
      </div>
    </div>
    <div className="flex gap-2 w-full sm:w-auto">
      <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 text-secondary rounded-xl text-sm font-medium hover:bg-gray-100">
        <Eye size={16} />
        View
      </button>
      <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20">
        <Download size={16} />
        Download
      </button>
    </div>
  </div>
);

const PatientRecords = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-secondary">My Medical Records</h2>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search records..." 
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary w-64"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-text-gray uppercase tracking-wider ml-1">February 2025</h3>
        <RecordCard title="Complete Blood Count (CBC)" date="Feb 12, 2025" doctor="Dr. Robert Henry" />
        <RecordCard title="MRI Scan Report - Knee" date="Feb 10, 2025" doctor="Dr. Sarah Smith" />
        
        <h3 className="text-sm font-semibold text-text-gray uppercase tracking-wider ml-1 mt-8">January 2025</h3>
        <RecordCard title="General Checkup Summary" date="Jan 24, 2025" doctor="Dr. Robert Henry" />
        <RecordCard title="Prescription - Antibiotics" date="Jan 24, 2025" doctor="Dr. Robert Henry" />
      </div>
    </div>
  );
};

export default PatientRecords;
