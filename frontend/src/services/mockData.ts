import { faker } from '@faker-js/faker';
import { Patient, AIAnalysisResult, VitalSign, ActivityItem } from '../types';

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockActivityFeed: ActivityItem[] = Array.from({ length: 5 }).map(() => ({
  id: faker.string.uuid(),
  type: faker.helpers.arrayElement(['alert', 'appointment', 'report']),
  title: faker.helpers.arrayElement(['Critical Vitals Alert', 'New Lab Result', 'Appointment Confirmed', 'System Update']),
  time: faker.date.recent().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  description: faker.lorem.sentence(),
  priority: faker.helpers.arrayElement(['low', 'medium', 'high'])
}));

export const mockPatients: Patient[] = Array.from({ length: 12 }).map(() => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  age: faker.number.int({ min: 18, max: 90 }),
  gender: faker.helpers.arrayElement(['Male', 'Female']),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  bloodType: faker.helpers.arrayElement(['A+', 'O+', 'B-', 'AB+']),
  condition: faker.helpers.arrayElement(['Leukemia Check', 'Malaria Check', 'Pneumonia Check', 'Routine Checkup', 'Hypertension', 'Diabetes']),
  status: faker.helpers.arrayElement(['Critical', 'Stable', 'Recovering']),
  riskScore: faker.number.int({ min: 10, max: 99 }),
  lastVisit: faker.date.recent().toISOString(),
  allergies: [faker.science.chemicalElement().name, 'Peanuts', 'Penicillin'],
  medications: ['Metformin', 'Lisinopril', 'Atorvastatin'],
  notes: faker.lorem.paragraph(),
  history: Array.from({ length: 5 }).map(() => ({
    id: faker.string.uuid(),
    date: faker.date.past().toISOString(),
    type: faker.helpers.arrayElement(['Report', 'Scan', 'Visit', 'Prescription']),
    title: faker.helpers.arrayElement(['Blood Work', 'MRI Scan', 'Routine Checkup', 'Prescription Renewal']),
    summary: faker.lorem.sentence(),
    doctorName: 'Dr. Henry'
  }))
}));

export const generateAIAnalysis = async (condition: string): Promise<AIAnalysisResult> => {
  await delay(1500); 
  const isCritical = Math.random() > 0.5;
  return {
    disease: condition.split(' ')[0] || 'Unknown',
    confidence: faker.number.float({ min: 0.75, max: 0.99 }),
    timestamp: new Date().toISOString(),
    features: [
      { name: 'WBC Count', value: 12.5, contribution: isCritical ? 0.3 : 0.1 },
      { name: 'Hemoglobin', value: 14.0, contribution: -0.1 },
      { name: 'Platelets', value: 250, contribution: 0.05 },
      { name: 'Age', value: 65, contribution: 0.15 },
      { name: 'Temp', value: 101.2, contribution: isCritical ? 0.4 : 0.0 },
    ],
    summary: `Based on the patient's recent blood work and history, the model detects a ${isCritical ? 'high' : 'low'} probability of ${condition}. Key indicators include elevated WBC count and temperature.`,
    recommendation: isCritical 
      ? 'Immediate hospitalization recommended. Start antibiotic course IV.' 
      : 'Patient is stable. Monitor vitals daily and schedule follow-up in 1 week.'
  };
};

export const mockVitals: VitalSign[] = Array.from({ length: 24 }).map((_, i) => ({
  time: `${i}:00`,
  value: 70 + Math.random() * 20,
  unit: 'bpm',
  status: Math.random() > 0.9 ? 'warning' : 'normal'
}));

export const mockBPData = Array.from({ length: 24 }).map((_, i) => ({
  time: `${i}:00`,
  systolic: 110 + Math.random() * 20,
  diastolic: 70 + Math.random() * 10,
}));
