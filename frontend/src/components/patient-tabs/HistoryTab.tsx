import React from 'react';
import { Patient } from '../../types';
import { FileText, Stethoscope, Pill, Scan } from 'lucide-react';

const HistoryTab = ({ patient }: { patient: Patient }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
      <h3 className="font-semibold text-lg text-secondary mb-6">Medical Timeline</h3>
      
      <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
        {patient.history.map((record, idx) => (
          <div key={record.id} className="relative">
            {/* Timeline Dot */}
            <div className={`absolute -left-[29px] top-1 w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${
              record.type === 'Report' ? 'bg-blue-100 text-blue-600' :
              record.type === 'Scan' ? 'bg-purple-100 text-purple-600' :
              record.type === 'Prescription' ? 'bg-green-100 text-green-600' :
              'bg-gray-100 text-gray-600'
            }`}>
              {record.type === 'Report' ? <FileText size={12} /> :
               record.type === 'Scan' ? <Scan size={12} /> :
               record.type === 'Prescription' ? <Pill size={12} /> :
               <Stethoscope size={12} />}
            </div>

            <div className="bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-md transition-all border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-secondary">{record.title}</h4>
                  <span className="text-xs text-text-gray">{record.type} • {new Date(record.date).toLocaleDateString()}</span>
                </div>
                <button className="text-xs font-medium text-primary hover:underline">View Details</button>
              </div>
              <p className="text-sm text-secondary/80">{record.summary}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-text-gray">
                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center font-bold text-[10px]">
                  {record.doctorName.charAt(4)}
                </div>
                {record.doctorName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTab;
