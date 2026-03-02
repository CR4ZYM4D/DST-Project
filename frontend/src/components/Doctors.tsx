import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ name, role, rating, reviews, image }: { name: string, role: string, rating: number, reviews: number, image: string }) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-[20px] p-4 shadow-card hover:shadow-lg transition-all border border-gray-50 flex flex-col items-center h-full">
      <div className="w-full h-64 rounded-[20px] overflow-hidden mb-4 bg-gray-100 relative">
          <img src={image} alt={name} className="w-full h-full object-cover object-top" />
      </div>
      <h3 className="text-xl font-medium text-secondary text-center">{name}</h3>
      <p className="text-text-gray text-sm mb-2 text-center">{role}</p>
      
      <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < Math.floor(rating) ? "text-primary fill-primary" : "text-gray-300"} />
          ))}
          <span className="text-secondary text-sm ml-1">({reviews})</span>
      </div>

      <button 
        onClick={() => navigate('/login')}
        className="w-full py-2.5 mt-auto text-center text-sm text-white font-medium bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
      >
          Book Appointment
      </button>
    </div>
  );
};

interface DoctorsProps {
  searchQuery?: string;
  specialityQuery?: string;
}

const Doctors = ({ searchQuery = '', specialityQuery = '' }: DoctorsProps) => {
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

  // Filter doctors based on search queries
  const filteredDoctors = doctors.filter(doc => {
    const matchesName = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpeciality = doc.role.toLowerCase().includes(specialityQuery.toLowerCase());
    return matchesName && matchesSpeciality;
  });

  return (
    <section id="doctors-section" className="py-20 px-4 md:px-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-secondary mb-4">Meet our Doctors</h2>
          <p className="text-text-gray">Well qualified doctors are ready to serve you</p>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredDoctors.map((doc, index) => (
                  <DoctorCard key={index} {...doc} />
              ))}
          </div>
        ) : (
          <div className="text-center py-12 text-text-gray">
            <p className="text-lg">No doctors found matching your search criteria.</p>
            <p className="text-sm mt-2">Try adjusting your search terms.</p>
          </div>
        )}

        {filteredDoctors.length > 0 && (
          <div className="flex justify-center mt-12">
              <button className="bg-white border border-gray-200 text-secondary hover:bg-gray-50 px-8 py-3 rounded-2xl font-medium transition-colors">
                  See more
              </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;
