import React from 'react';
import { Microscope, Ambulance, Phone, FileText } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, active = false }: { icon: any, title: string, active?: boolean }) => (
  <div className={`p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer h-64 ${active ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105' : 'bg-white text-secondary shadow-card hover:shadow-lg'}`}>
    <div className={`p-4 rounded-full ${active ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
        <Icon size={40} className={active ? 'text-white' : 'text-primary'} />
    </div>
    <h3 className="text-lg font-medium text-center w-32">{title}</h3>
  </div>
);

const Services = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-secondary mb-4">Our Medical Services</h2>
          <p className="text-text-gray">We are dedicated to serve you best medical services</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={Microscope} title="Well equipped lab" />
          <ServiceCard icon={Ambulance} title="Emergency Ambulance" active={true} />
          {/* Replaced Online Appointment with Digital Records */}
          <ServiceCard icon={FileText} title="Digital Records" />
          <ServiceCard icon={Phone} title="Call Center" />
        </div>
      </div>
    </section>
  );
};

export default Services;
