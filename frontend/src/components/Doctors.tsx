import React from 'react';
import { Star } from 'lucide-react';

const DoctorCard = ({ name, role, rating, reviews, image }: { name: string, role: string, rating: number, reviews: number, image: string }) => (
  <div className="bg-white rounded-[20px] p-4 shadow-card hover:shadow-lg transition-all border border-gray-50 flex flex-col items-center">
    <div className="w-full h-64 rounded-[20px] overflow-hidden mb-4 bg-gray-100 relative">
        <img src={image} alt={name} className="w-full h-full object-cover object-top" />
    </div>
    <h3 className="text-xl font-medium text-secondary">{name}</h3>
    <p className="text-text-gray text-sm mb-2">{role}</p>
    
    <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < Math.floor(rating) ? "text-primary fill-primary" : "text-gray-300"} />
        ))}
        <span className="text-secondary text-sm ml-1">({reviews})</span>
    </div>

    {/* Booking Button Removed */}
    <div className="w-full py-2 text-center text-sm text-primary font-medium bg-primary/5 rounded-xl">
        Available
    </div>
  </div>
);

const Doctors = () => {
  const doctors = [
    {
        name: "Dr. Robert Henry",
        role: "Cardiologist",
        rating: 4.5,
        reviews: 102,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Dr. Harry Littleton",
        role: "Neurologist",
        rating: 4.5,
        reviews: 97,
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Dr. Sharina Khan",
        role: "Gynecologist",
        rating: 5,
        reviews: 116,
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Dr. Sanjeev Kapoor",
        role: "Child Specialist",
        rating: 4.0,
        reviews: 72,
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-secondary mb-4">Meet our Doctors</h2>
          <p className="text-text-gray">Well qualified doctors are ready to serve you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, index) => (
                <DoctorCard key={index} {...doc} />
            ))}
        </div>

        <div className="flex justify-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-2xl font-medium shadow-lg shadow-primary/20">
                See more
            </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
