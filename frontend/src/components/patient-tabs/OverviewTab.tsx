import React from 'react';
import { Patient } from '../../types';
import { Pill, AlertCircle, Droplet, Calendar, Phone, Mail } from 'lucide-react';

const InfoCard = ({ title, children, className = "" }: any) => (
  <div className={`bg-white p-6 rounded-2xl shadow-card border border-gray-50 ${className}`}>
    <h4 className="font-semibold text-secondary mb-4">{title}</h4>
    {children}
  </div>
);

const OverviewTab = ({ patient }: { patient: Patient }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Demographics */}
      <InfoCard title="Demographics" className="lg:col-span-2">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
          <div>
            <p className="text-xs text-text-gray uppercase mb-1">Full Name</p>
            <p className="font-medium text-secondary">{patient.name}</p>
          </div>
          <div>
            <p className="text-xs text-text-gray uppercase mb-1">Date of Birth</p>
            <p className="font-medium text-secondary">Jan 12, 1960 ({patient.age} yrs)</p>
          </div>
          <div>
            <p className="text-xs text-text-gray uppercase mb-1">Gender</p>
            <p className="font-medium text-secondary">{patient.gender}</p>
          </div>
          <div>
            <p className="text-xs text-text-gray uppercase mb-1">Blood Type</p>
            <div className="flex items-center gap-2">
              <Droplet size={14} className="text-red-500" />
              <p className="font-medium text-secondary">{patient.bloodType}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-gray uppercase mb-1">Contact</p>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={14} className="text-gray-400" />
              <p className="text-secondary">{patient.phone}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-gray uppercase mb-1">Email</p>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={14} className="text-gray-400" />
              <p className="text-secondary truncate">{patient.email}</p>
            </div>
          </div>
        </div>
      </InfoCard>

      {/* Quick Summary */}
      <InfoCard title="Medical Snapshot">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-secondary">
              <AlertCircle size={16} className="text-orange-500" />
              Allergies
            </div>
            <div className="flex flex-wrap gap-2">
              {patient.allergies.map(a => (
                <span key={a} className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-lg border border-orange-100">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="h-px bg-gray-100"></div>
          <div>
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-secondary">
              <Pill size={16} className="text-blue-500" />
              Current Medications
            </div>
            <ul className="space-y-1">
              {patient.medications.map(m => (
                <li key={m} className="text-sm text-text-gray flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InfoCard>

      {/* Recent Notes */}
      <InfoCard title="Latest Clinical Note" className="lg:col-span-3">
        <div className="bg-yellow-50/50 p-4 rounded-xl border border-yellow-100">
          <p className="text-sm text-secondary leading-relaxed italic">
            "{patient.notes}"
          </p>
          <div className="mt-3 flex justify-end">
             <span className="text-xs text-text-gray font-medium">- Dr. Robert Henry, {new Date(patient.lastVisit).toLocaleDateString()}</span>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default OverviewTab;
