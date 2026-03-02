import React from 'react';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light-gray pt-16 pb-8 px-4 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="text-primary font-bold text-2xl">Hospital</div>
            <div className="text-secondary text-2xl">logo</div>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.
          </p>
        </div>

        <div>
          <h3 className="text-secondary font-medium text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-secondary text-sm">
            <li>Card title</li>
            <li>Card title</li>
            <li>Card title</li>
            <li>Card title</li>
          </ul>
        </div>

        <div>
          <h3 className="text-secondary font-medium text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-secondary text-sm">
            <li>Card title</li>
            <li>Card title</li>
            <li>Card title</li>
            <li>Card title</li>
          </ul>
        </div>

        <div>
          <h3 className="text-secondary font-medium text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 mb-6">
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:text-primary transition-colors">
                <Facebook size={20} />
            </div>
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:text-primary transition-colors">
                <Twitter size={20} />
            </div>
            <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:text-primary transition-colors">
                <Instagram size={20} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-secondary text-sm">
        &copy; 2025 Hospital AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
