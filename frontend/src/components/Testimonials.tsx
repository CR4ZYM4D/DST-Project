import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard = ({ name, role, text, image }: { name: string, role: string, text: string, image: string }) => (
  <div className="bg-white p-6 rounded-[20px] shadow-card min-w-[300px] md:min-w-[400px] flex gap-4 items-center">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div>
        <h4 className="font-medium text-secondary text-lg">{name}</h4>
        <p className="text-text-gray text-xs mb-2">{role}</p>
        <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-primary fill-primary" />
            ))}
        </div>
        <p className="text-secondary text-sm italic">"{text}"</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-text-gray mb-2">Let's see what our happy patients says</p>
          <h2 className="text-4xl font-semibold text-secondary">Patients Testimonial</h2>
        </div>

        <div className="relative flex items-center justify-center gap-8 overflow-hidden py-8">
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg absolute left-0 md:static z-10">
                <ChevronLeft size={20} />
            </button>

            <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide px-4">
                <TestimonialCard 
                    name="Sara Ali Khan" 
                    role="Cardiologist Patient" 
                    text="Thanks for all the services, no doubt it is the best hospital."
                    image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
                />
                <TestimonialCard 
                    name="Simon Targett" 
                    role="Neurologist Patient" 
                    text="The AI diagnosis was incredibly accurate and fast."
                    image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                />
            </div>

            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg absolute right-0 md:static z-10">
                <ChevronRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
