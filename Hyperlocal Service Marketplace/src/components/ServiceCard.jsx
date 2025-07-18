import { motion } from "framer-motion";
import { Star, Clock, Users, TrendingUp, Award } from "lucide-react";

export default function ServiceCard({ service, index, onClick }) {
  const discountPercentage = service.originalPrice
    ? Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)
    : 0;

  const handleBookNow = (e) => {
    e.stopPropagation();

    
    window.location.href = "/booking"; // go to booking page

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("navigateToBooking", {
          detail: {
            service: service.title,
            price: service.price,
          },
        })
      );
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {service.badge && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {service.badge}
          </div>
        )}

        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            {discountPercentage}% OFF
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {service.category}
            </span>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold text-gray-700 ml-1">{service.rating}</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {service.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            {service.professionals}+ pros
          </div>
          <div className="flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            {(service.bookings / 1000).toFixed(0)}k bookings
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">₹{service.price}</span>
            {service.originalPrice && (
              <span className="text-sm text-gray-400 line-through">₹{service.originalPrice}</span>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookNow}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Now
          </motion.button>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{service.reviewCount?.toLocaleString()} reviews</span>
            <div className="flex items-center">
              <Award className="w-3 h-3 mr-1" />
              Verified Service
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
