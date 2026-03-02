import React, { useState } from 'react';
import { Search, Check, X, FileText, ShieldAlert } from 'lucide-react';

const mockPendingDoctors = [
  { id: 'DOC-001', name: 'Dr. Emily Chen', specialty: 'Neurology', experience: '8 Years', license: 'MED-99281', status: 'Pending', date: 'Oct 24, 2025' },
  { id: 'DOC-002', name: 'Dr. Marcus Johnson', specialty: 'Cardiology', experience: '12 Years', license: 'MED-44102', status: 'Pending', date: 'Oct 23, 2025' },
  { id: 'DOC-003', name: 'Dr. Sarah Williams', specialty: 'Pediatrics', experience: '5 Years', license: 'MED-77390', status: 'Pending', date: 'Oct 22, 2025' },
];

const DoctorVerification = () => {
  const [doctors, setDoctors] = useState(mockPendingDoctors);
  const [searchTerm, setSearchTerm] = useState('');

  const handleApprove = (id: string) => {
    setDoctors(doctors.filter(d => d.id !== id));
    // In real app, trigger API to update status
  };

  const handleReject = (id: string) => {
    setDoctors(doctors.filter(d => d.id !== id));
    // In real app, trigger API to update status
  };

  const filteredDoctors = doctors.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-secondary">Doctor Verification</h2>
          <p className="text-text-gray text-sm mt-1">Review and approve medical professional accounts.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or specialty..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-card border border-gray-50 overflow-hidden">
        {filteredDoctors.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">Doctor Details</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">Specialty & Exp</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">License No.</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">Documents</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-text-gray uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredDoctors.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                          {doc.name.charAt(4)}
                        </div>
                        <div>
                          <div className="font-medium text-secondary">{doc.name}</div>
                          <div className="text-xs text-text-gray">Applied: {doc.date}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-secondary font-medium">{doc.specialty}</div>
                      <div className="text-xs text-text-gray">{doc.experience}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary font-mono">{doc.license}</td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                        <FileText size={14} /> View Credentials
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleReject(doc.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                          title="Reject"
                        >
                          <X size={18} />
                        </button>
                        <button 
                          onClick={() => handleApprove(doc.id)}
                          className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors shadow-sm shadow-green-500/20"
                        >
                          <Check size={16} /> Approve
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <ShieldAlert size={32} />
            </div>
            <h3 className="text-lg font-medium text-secondary">No Pending Verifications</h3>
            <p className="text-sm text-text-gray mt-1">All doctor accounts have been reviewed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorVerification;
