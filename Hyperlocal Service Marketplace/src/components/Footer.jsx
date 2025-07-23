import React, { useState } from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Mail,
  Phone,
  MapPin,
  Smartphone,
} from 'lucide-react';

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-700' },
  ];

  const quickLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Services', url: '#' },
    { name: 'Contact', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'd2dservice@company.com' },
    { icon: Phone, text: '+91 **********' },
    { icon: MapPin, text: 'Uttar Pradesh, India' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">D2D Service</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted door-to-door service platform. We bring professional services 
              right to your doorstep with quality and convenience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`p-2 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 ${social.color} hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon size={16} className="text-gray-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{contact.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile App Download */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Download Our App</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-all duration-300 group w-full"
              >
                <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                  <Smartphone size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">GET IT ON</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
              <p className="text-xs text-gray-400">
                Download our mobile app for easy booking and seamless service experience.
              </p>
            </div>
          </div>

          {/* Reviews & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Reviews & Updates</h4>

            {/* Review Section */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Rate our service:</p>
              <div className="flex space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={`cursor-pointer transition-colors duration-200 ${
                      (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-500'
                    }`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    fill={(hoverRating || rating) >= star ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <button className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition-colors duration-200">
                Submit
              </button>
            </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 D2D Service. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;