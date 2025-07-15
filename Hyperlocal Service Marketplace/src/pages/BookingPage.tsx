'use client' 

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  Briefcase,
  Star,
  Shield,
} from 'lucide-react'

interface BookingData {
  name: string
  phone: string
  address: string
  service: string
  date: string
  time: string
  price: number
}

interface BookingPageProps {
  onSubmit: (data: BookingData) => void
}

const services = [
  { name: 'AC Service & Repair', price: 499, rating: 4.8, category: 'Appliance' },
  { name: 'Bathroom Deep Cleaning', price: 1299, rating: 4.9, category: 'Cleaning' },
  { name: 'Full Home Cleaning', price: 2499, rating: 4.7, category: 'Cleaning' },
  { name: 'Salon for Women at Home', price: 899, rating: 4.9, category: 'Beauty' },
  { name: 'Massage for Men', price: 1599, rating: 4.8, category: 'Wellness' },
  { name: 'Plumber', price: 199, rating: 4.6, category: 'Repair' },
  { name: 'Electrician', price: 149, rating: 4.7, category: 'Repair' },
  { name: 'Carpenter', price: 299, rating: 4.5, category: 'Repair' },
  { name: 'Painting', price: 4999, rating: 4.8, category: 'Home Improvement' },
  { name: 'Pest Control', price: 999, rating: 4.6, category: 'Cleaning' },
  { name: 'Appliance Repair', price: 349, rating: 4.7, category: 'Appliance' },
  { name: 'Home Salon for Men', price: 599, rating: 4.8, category: 'Beauty' },
]

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM',
]

export default function BookingPage({ onSubmit }: BookingPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    time: '',
    price: 0,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: keyof BookingData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handleServiceChange = (serviceName: string) => {
    const selectedService = services.find((s) => s.name === serviceName)
    setFormData((prev) => ({
      ...prev,
      service: serviceName,
      price: selectedService?.price || 0,
    }))
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.service) newErrors.service = 'Service selection is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
      navigate('/payment')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 min-h-screen flex items-center justify-center p-4 py-8"
    >
      <div className="w-full max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 10M+ customers
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Book Your Service</h1>
          <p className="text-xl text-gray-600 font-medium">Professional home services at your doorstep</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
           {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  <User className="inline w-4 h-4 mr-2 text-blue-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-medium"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2 font-medium">{errors.name}</p>}
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  <Phone className="inline w-4 h-4 mr-2 text-blue-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-medium"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-2 font-medium">{errors.phone}</p>}
              </motion.div>
            </div>

            {/* Address */}
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                <MapPin className="inline w-4 h-4 mr-2 text-blue-600" />
                Service Address
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={3}
                className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none font-medium"
                placeholder="Enter your complete address with landmark"
              />
              {errors.address && <p className="text-red-500 text-sm mt-2 font-medium">{errors.address}</p>}
            </motion.div>

            {/* Service Selection */}
            <motion.div>
              <label className="block text-gray-700 font-semibold mb-4 text-sm uppercase tracking-wide">
                <Briefcase className="inline w-4 h-4 mr-2 text-blue-600" />
                Select Service
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service.name}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.service === service.name
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 shadow-md hover:shadow-lg"
                    }`}
                    onClick={() => handleServiceChange(service.name)}
                  >
                    <div className="text-gray-800 font-semibold text-sm mb-2">{service.name}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-blue-600 font-bold text-lg">₹{service.price}</div>
                      <div className="flex items-center text-yellow-500 text-xs">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {service.rating}
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{service.category}</div>
                  </motion.div>
                ))}
              </div>
              {errors.service && <p className="text-red-500 text-sm mt-2 font-medium">{errors.service}</p>}
            </motion.div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  <Calendar className="inline w-4 h-4 mr-2 text-blue-600" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-medium"
                />
                {errors.date && <p className="text-red-500 text-sm mt-2 font-medium">{errors.date}</p>}
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  <Clock className="inline w-4 h-4 mr-2 text-blue-600" />
                  Preferred Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-medium"
                >
                  <option value="">Select preferred time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && <p className="text-red-500 text-sm mt-2 font-medium">{errors.time}</p>}
              </motion.div>
            </div>

            {/* Price Display */}
            {formData.service && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200"
              >
                <div className="text-center">
                  <div className="text-gray-600 font-medium mb-2">Service Cost</div>
                  <div className="text-4xl font-bold text-blue-600">₹{formData.price}</div>
                  <div className="text-gray-500 text-sm mt-2">*Inclusive of all taxes</div>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
  type="submit"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg font-bold"
>
  Continue to Payment →
</motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}