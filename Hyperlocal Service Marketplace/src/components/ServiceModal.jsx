// src/components/ServiceModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { X, Star, Clock, Users, ShoppingBag, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServiceModal({ service, onClose }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X size={24} />
        </button>
        <img
          src={service.image}
          alt={service.title}
          className="rounded-xl mb-4 w-full h-56 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
        <p className="text-sm text-gray-500">{service.badge}</p>
        <p className="mt-2 text-gray-600">{service.shortDescription}</p>

        <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
          <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> {service.rating} ⭐ ({service.reviewCount}+)</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {service.duration}</span>
          <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {service.professionals} Professionals</span>
          <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> {service.bookings}+ Bookings</span>
        </div>

        {service.included && (
          <div className="mt-6">
            <h3 className="font-semibold text-gray-700 mb-2">What's Included:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {service.included.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {service.notIncluded && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">What's Not Included:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {service.notIncluded.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-green-600">₹{service.price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">₹{service.originalPrice}</span>
          </div>
          <button
            onClick={handleBooking}
            className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          >
            Book Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
