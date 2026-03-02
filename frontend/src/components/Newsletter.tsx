import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto bg-primary rounded-[30px] p-8 md:p-16 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Subscribe To Our Newsletter</h2>
        <p className="text-white/80 mb-8">Get latest news of our hospital</p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto bg-white p-2 rounded-2xl">
            <input 
                type="email" 
                placeholder="Enter your email here" 
                className="flex-1 px-6 py-3 rounded-xl outline-none text-secondary placeholder:text-gray-400"
            />
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors">
                Subscribe
            </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
