import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';

// Doctor Pages
import DoctorHome from './pages/dashboard/doctor/DoctorHome';
import PatientList from './pages/dashboard/doctor/PatientList';
import PatientProfile from './pages/dashboard/doctor/PatientProfile';

// Patient Pages
import PatientHome from './pages/dashboard/patient/PatientHome';
import PatientRecords from './pages/dashboard/patient/PatientRecords';
import PatientCheckIn from './pages/dashboard/patient/PatientCheckIn';
import Chatbot from './components/patient/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Doctor Routes */}
        <Route path="/dashboard/doctor" element={<DashboardLayout role="doctor" />}>
          <Route index element={<DoctorHome />} />
          <Route path="patients" element={<PatientList />} />
          <Route path="patients/:id" element={<PatientProfile />} />
          <Route path="monitoring" element={<div className="text-center text-gray-500 mt-20">Full Monitoring Dashboard Coming Soon</div>} />
        </Route>

        {/* Patient Routes */}
        <Route path="/dashboard/patient" element={<DashboardLayout role="patient" />}>
          <Route index element={<PatientHome />} />
          <Route path="records" element={<PatientRecords />} />
          <Route path="checkin" element={<PatientCheckIn />} />
          <Route path="chat" element={<div className="max-w-2xl mx-auto"><Chatbot /></div>} />
        </Route>

        {/* Legacy/Redirect */}
        <Route path="/dashboard" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
