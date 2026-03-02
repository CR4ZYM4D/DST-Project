export type UserRole = 'doctor' | 'patient';

export interface User {
  id: string;
  name: string;
  email?: string;
  phone: string;
  role: UserRole;
  avatar?: string;
}

export interface MedicalRecord {
  id: string;
  date: string;
  type: 'Report' | 'Prescription' | 'Scan' | 'Lab' | 'Visit';
  title: string;
  summary: string;
  doctorName: string;
  fileUrl?: string; // Mock URL
}

export interface ActivityItem {
  id: string;
  type: 'alert' | 'appointment' | 'report' | 'system';
  title: string;
  time: string;
  description: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;
  bloodType: string;
  condition: string;
  status: 'Critical' | 'Stable' | 'Recovering';
  riskScore: number;
  lastVisit: string;
  allergies: string[];
  medications: string[];
  history: MedicalRecord[];
  notes: string;
}

export interface AIAnalysisResult {
  disease: string;
  confidence: number;
  timestamp: string;
  features: { name: string; value: number; contribution: number }[];
  summary: string;
  recommendation: string;
}

export interface VitalSign {
  time: string;
  value: number;
  unit: string;
  status?: 'normal' | 'warning' | 'critical';
}
