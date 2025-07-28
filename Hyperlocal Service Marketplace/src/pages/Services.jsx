"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sparkles, Home, Wrench, Zap, Droplets, Bug, X, Star, Clock, Users, Check, Minus, Calendar } from "lucide-react"

const services = [
  // Beauty & Grooming
  {
    id: "salon-women",
    name: "Salon for Women",
    category: "Beauty & Grooming",
    price: 899,
    originalPrice: 1299,
    duration: "60-90 mins",
    rating: 4.9,
    reviews: 15623,
    description: "Professional beauty services including haircut, facial, manicure, pedicure at home",
    includes: ["Haircut & Styling", "Facial Treatment", "Manicure & Pedicure", "Premium Products"],
    excludes: ["Hair Coloring", "Advanced Treatments"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    image: "https://i.postimg.cc/hPqHYFN6/Conditioning-Services.jpgc",
  },
  {
    id: "massage-therapy",
    name: "Therapeutic Massage",
    category: "Beauty & Grooming",
    price: 1599,
    originalPrice: 2199,
    duration: "60-90 mins",
    rating: 4.8,
    reviews: 8934,
    description: "Relaxing full body massage therapy to relieve stress and muscle tension",
    includes: ["Full Body Massage", "Aromatic Oils", "Stress Relief", "Professional Therapist"],
    excludes: ["Deep Tissue Massage", "Hot Stone Therapy"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    image: "https://i.postimg.cc/dVgRWFxT/173267610477134f5383a092abceeab89699cc21a2.webp",
  },
  {
    id: "men-grooming",
    name: "Men's Grooming",
    category: "Beauty & Grooming",
    price: 599,
    originalPrice: 899,
    duration: "45-60 mins",
    rating: 4.7,
    reviews: 12456,
    description: "Complete grooming package including haircut, beard styling, facial cleanup",
    includes: ["Haircut & Styling", "Beard Trimming", "Facial Cleanup", "Head Massage"],
    excludes: ["Hair Coloring", "Advanced Facials"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    image: "https://i.postimg.cc/hvJPZkwf/Untitled-design-2019-08-26-T171855-502.png",
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    category: "Beauty & Grooming",
    price: 4999,
    originalPrice: 7999,
    duration: "2-3 hours",
    rating: 4.9,
    reviews: 3456,
    description: "Professional bridal makeover with HD makeup, hair styling, draping assistance",
    includes: ["HD Makeup", "Hair Styling", "Draping Assistance", "Touch-up Kit"],
    excludes: ["Jewelry", "Outfit", "Photography"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    image: "https://i.postimg.cc/0NWzt0QX/hair-and-bridal-makeup-studio-gautam-nagar-delhi-beauty-parlours-for-makeup-cvm1syc6h1-768x706.webp",
  },

  // Home Cleaning
  {
    id: "deep-cleaning",
    name: "Full Home Deep Cleaning",
    category: "Home Cleaning",
    price: 2499,
    originalPrice: 3499,
    duration: "3-4 hours",
    rating: 4.8,
    reviews: 18934,
    description: "Comprehensive deep cleaning of entire home with eco-friendly products",
    includes: ["All Rooms Cleaning", "Kitchen Deep Clean", "Bathroom Sanitization", "Floor Mopping"],
    excludes: ["Exterior Cleaning", "Carpet Shampooing", "Appliance Interior"],
    icon: <Home className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    image: "https://i.postimg.cc/J0b4WNrL/Untitled-02.jpg",
  },
  {
    id: "bathroom-cleaning",
    name: "Bathroom Deep Cleaning",
    category: "Home Cleaning",
    price: 1299,
    originalPrice: 1799,
    duration: "90-120 mins",
    rating: 4.7,
    reviews: 12789,
    description: "Intensive bathroom cleaning and sanitization with anti-bacterial treatment",
    includes: ["Tile & Grout Cleaning", "Fixture Polishing", "Drain Cleaning", "Anti-bacterial Treatment"],
    excludes: ["Plumbing Repairs", "Tile Replacement"],
    icon: <Home className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    image: "https://i.postimg.cc/WbFw0t9P/bathroom-cleaning.jpg",
  },
  {
    id: "kitchen-cleaning",
    name: "Kitchen Deep Cleaning",
    category: "Home Cleaning",
    price: 1599,
    originalPrice: 2299,
    duration: "2-3 hours",
    rating: 4.6,
    reviews: 9876,
    description: "Complete kitchen cleaning including appliances, cabinets, chimney degreasing",
    includes: ["Appliance Cleaning", "Cabinet Cleaning", "Countertop Polishing", "Chimney Degreasing"],
    excludes: ["Appliance Repair", "Pest Control"],
    icon: <Home className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    image: "https://i.postimg.cc/Y9QhpKRZ/images-3.jpg",
  },
  {
    id: "sofa-cleaning",
    name: "Sofa & Carpet Cleaning",
    category: "Home Cleaning",
    price: 999,
    originalPrice: 1499,
    duration: "60-90 mins",
    rating: 4.8,
    reviews: 7654,
    description: "Professional upholstery cleaning using steam cleaning and fabric-safe products",
    includes: ["Steam Cleaning", "Stain Removal", "Fabric Protection", "Odor Elimination"],
    excludes: ["Leather Cleaning", "Curtain Cleaning"],
    icon: <Home className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    image: "https://i.postimg.cc/Twcf7RCd/1-4.webp",
  },

  // Appliance Repair
  {
    id: "ac-service",
    name: "AC Service & Repair",
    category: "Appliance Repair",
    price: 499,
    originalPrice: 699,
    duration: "45-60 mins",
    rating: 4.8,
    reviews: 25847,
    description: "Complete AC maintenance including gas refill, deep cleaning, filter replacement",
    includes: ["Gas Refill", "Deep Cleaning", "Filter Replacement", "Performance Check"],
    excludes: ["Spare Parts Cost", "Major Repairs"],
    icon: <Wrench className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    image: "https://i.postimg.cc/KzpsvwY7/2-1.jpg",
  },
  {
    id: "washing-machine",
    name: "Washing Machine Repair",
    category: "Appliance Repair",
    price: 349,
    originalPrice: 549,
    duration: "30-45 mins",
    rating: 4.6,
    reviews: 15632,
    description: "Expert washing machine repair including drum cleaning, motor repair",
    includes: ["Diagnosis", "Cleaning", "Minor Repairs", "Performance Test"],
    excludes: ["Major Parts", "Motor Replacement"],
    icon: <Wrench className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    image: "https://i.postimg.cc/rFkYy1VP/washing-machine-repairing-service.jpg",
  },
  {
    id: "refrigerator",
    name: "Refrigerator Repair",
    category: "Appliance Repair",
    price: 399,
    originalPrice: 599,
    duration: "45-60 mins",
    rating: 4.7,
    reviews: 11234,
    description: "Professional fridge repair including cooling issues, compressor problems",
    includes: ["Cooling Check", "Compressor Service", "Thermostat Repair", "Gas Refill"],
    excludes: ["Compressor Replacement", "Major Parts"],
    icon: <Wrench className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    image: "https://i.postimg.cc/GhmGjtqp/Side-by-Side-Door-Fridge-Repair-Services.jpg",
  },
  {
    id: "microwave",
    name: "Microwave Repair",
    category: "Appliance Repair",
    price: 299,
    originalPrice: 449,
    duration: "30-45 mins",
    rating: 4.5,
    reviews: 8765,
    description: "Microwave oven repair including heating issues, turntable problems",
    includes: ["Heating Test", "Safety Check", "Component Repair", "Cleaning"],
    excludes: ["Magnetron Replacement", "Major Electronics"],
    icon: <Wrench className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    image: "https://i.postimg.cc/kGp4sJgV/microwave-service.jpg",
  },

  // Electrical Services
  {
    id: "electrician",
    name: "Electrician Services",
    category: "Electrical Services",
    price: 149,
    originalPrice: 249,
    duration: "30-60 mins",
    rating: 4.7,
    reviews: 19876,
    description: "Professional electrical services including wiring, switch installation, safety checks",
    includes: ["Wiring Repairs", "Switch Installation", "Safety Check", "Basic Materials"],
    excludes: ["Heavy Appliances", "Major Rewiring"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    image: "https://i.postimg.cc/DwqvJdL4/electrician-services-1.jpg",
  },
  {
    id: "fan-installation",
    name: "Fan Installation & Repair",
    category: "Electrical Services",
    price: 199,
    originalPrice: 349,
    duration: "30-45 mins",
    rating: 4.6,
    reviews: 13456,
    description: "Professional installation and repair of ceiling fans, exhaust fans",
    includes: ["Installation", "Wiring", "Speed Control", "Balancing"],
    excludes: ["Fan Purchase", "Ceiling Modification"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    image: "https://i.postimg.cc/QtRNK645/2e896442-629c-4f23-a3a4-7d3195f37073.jpg",
  },
  {
    id: "light-fitting",
    name: "Light & Switch Installation",
    category: "Electrical Services",
    price: 99,
    originalPrice: 199,
    duration: "15-30 mins",
    rating: 4.8,
    reviews: 16789,
    description: "Professional installation of lights, switches, dimmers and electrical fixtures",
    includes: ["Light Installation", "Switch Fitting", "Wiring", "Testing"],
    excludes: ["Fixture Purchase", "Decorative Lights"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    image: "https://i.postimg.cc/sfQJhwD2/Knee-s-Electrical-Service-19-2404190730550.jpg",
  },
  {
    id: "wiring",
    name: "Home Wiring Services",
    category: "Electrical Services",
    price: 799,
    originalPrice: 1199,
    duration: "2-3 hours",
    rating: 4.5,
    reviews: 7654,
    description: "Comprehensive home wiring services including new connections, rewiring",
    includes: ["Wiring Installation", "Safety Measures", "Testing", "Documentation"],
    excludes: ["Electrical Panel", "Meter Connection"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    image: "https://i.postimg.cc/XYzfq5S5/close-electrician-man-checking-voltage-260nw-2461350199.webp",
  },

  // Plumbing Services
  {
    id: "plumber",
    name: "Plumber Services",
    category: "Plumbing Services",
    price: 199,
    originalPrice: 299,
    duration: "30-45 mins",
    rating: 4.6,
    reviews: 22876,
    description: "Professional plumbing services for leaks, blockages, installations",
    includes: ["Leak Repairs", "Pipe Installation", "Drain Cleaning", "Basic Tools"],
    excludes: ["Material Cost", "Major Installations"],
    icon: <Droplets className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600",
    image: "https://i.postimg.cc/sDBDyGcq/plumber-service-500x500-1.jpg",
  },
  {
    id: "tap-repair",
    name: "Tap & Pipe Repair",
    category: "Plumbing Services",
    price: 149,
    originalPrice: 249,
    duration: "20-30 mins",
    rating: 4.7,
    reviews: 18765,
    description: "Expert repair and installation of taps, pipes, and fittings",
    includes: ["Tap Repair", "Pipe Fixing", "Leak Sealing", "Pressure Check"],
    excludes: ["Tap Purchase", "Major Pipe Work"],
    icon: <Droplets className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600",
    image: "https://i.postimg.cc/BvNG2Jp2/tap-repair.jpg",
  },
  {
    id: "toilet-repair",
    name: "Toilet & Basin Repair",
    category: "Plumbing Services",
    price: 249,
    originalPrice: 399,
    duration: "30-45 mins",
    rating: 4.5,
    reviews: 12456,
    description: "Professional repair of toilets, washbasins, and bathroom fittings",
    includes: ["Flush Repair", "Basin Fixing", "Drainage Check", "Seal Replacement"],
    excludes: ["Toilet Purchase", "Major Renovation"],
    icon: <Droplets className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600",
    image: "https://i.postimg.cc/DydF7QGC/toilet-repair-installation-indianapolis.webp",
  },
  {
    id: "water-tank",
    name: "Water Tank Cleaning",
    category: "Plumbing Services",
    price: 899,
    originalPrice: 1299,
    duration: "60-90 mins",
    rating: 4.8,
    reviews: 9876,
    description: "Thorough cleaning and sanitization of water tanks",
    includes: ["Tank Emptying", "Scrubbing", "Sanitization", "Refilling"],
    excludes: ["Tank Repair", "Pump Service"],
    icon: <Droplets className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600",
    image: "https://i.postimg.cc/YqyRGZQj/domestic-water-tank-cleaning-service.jpg",
  },

  // Pest Control
  {
    id: "general-pest",
    name: "General Pest Control",
    category: "Pest Control",
    price: 999,
    originalPrice: 1499,
    duration: "60-90 mins",
    rating: 4.6,
    reviews: 15432,
    description: "Complete pest control treatment for cockroaches, ants, spiders",
    includes: ["Multi-pest Treatment", "Safe Chemicals", "Spray Treatment", "3-month Warranty"],
    excludes: ["Termite Treatment", "Fumigation"],
    icon: <Bug className="w-6 h-6" />,
    color: "from-red-500 to-pink-500",
    image: "https://i.postimg.cc/kX1CVJj8/Untitled-design.jpg",
  },
  {
    id: "cockroach",
    name: "Cockroach Control",
    category: "Pest Control",
    price: 799,
    originalPrice: 1199,
    duration: "45-60 mins",
    rating: 4.7,
    reviews: 12876,
    description: "Specialized cockroach control treatment using gel baits",
    includes: ["Gel Bait Treatment", "Crack & Crevice Spray", "Kitchen Treatment", "2-month Warranty"],
    excludes: ["Other Pests", "Fumigation"],
    icon: <Bug className="w-6 h-6" />,
    color: "from-red-500 to-pink-500",
    image: "https://i.postimg.cc/j5F2QHc6/cockroach-pest-control-service-500x500.webp",
  },
  {
    id: "termite",
    name: "Termite Treatment",
    category: "Pest Control",
    price: 1499,
    originalPrice: 2299,
    duration: "90-120 mins",
    rating: 4.5,
    reviews: 8765,
    description: "Advanced termite treatment using drilling method and chemical barriers",
    includes: ["Drilling Treatment", "Chemical Barrier", "Wood Treatment", "5-year Warranty"],
    excludes: ["Structural Repair", "Wood Replacement"],
    icon: <Bug className="w-6 h-6" />,
    color: "from-red-500 to-pink-500",
    image: "https://i.postimg.cc/qRkDXnq7/8377f5cb33ea2d6afff744a37525a6d8.jpg",
  },
  {
    id: "bed-bugs",
    name: "Bed Bug Treatment",
    category: "Pest Control",
    price: 1299,
    originalPrice: 1899,
    duration: "60-90 mins",
    rating: 4.6,
    reviews: 6543,
    description: "Effective bed bug treatment using heat treatment and chemical spraying",
    includes: ["Heat Treatment", "Chemical Spray", "Mattress Treatment", "Furniture Treatment"],
    excludes: ["Mattress Replacement", "Furniture Cleaning"],
    icon: <Bug className="w-6 h-6" />,
    color: "from-red-500 to-pink-500",
    image: "https://i.postimg.cc/8P8Ktqj3/bed-bugs-service-500x500.webp",
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const navigate = useNavigate()

  const categories = [
    "All",
    "Beauty & Grooming",
    "Home Cleaning",
    "Appliance Repair",
    "Electrical Services",
    "Plumbing Services",
    "Pest Control",
  ]

  const filteredServices =
    selectedCategory === "All" ? services : services.filter((service) => service.category === selectedCategory)

  const handleBookNow = (service) => {
    // Store service data in localStorage for the booking page
    localStorage.setItem(
      "selectedService",
      JSON.stringify({
        service: service.name,
        price: service.price,
      }),
    )
    // Navigate to booking page
    navigate("/booking")
  }

  const ServiceModal = ({ service, onClose }) => {
    const discountPercentage = service.originalPrice
      ? Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)
      : 0

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2">
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.color} text-white`}>{service.icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
                <p className="text-gray-600">{service.category}</p>
              </div>
            </div>

            {discountPercentage > 0 && (
              <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                {discountPercentage}% OFF
              </div>
            )}
          </div>

          <div className="p-6">
            {/* Description */}
            <p className="text-gray-700 text-lg mb-6">{service.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-bold text-gray-800">{service.duration}</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-2xl">
                <Star className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Rating</div>
                <div className="font-bold text-gray-800">{service.rating}/5</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-2xl">
                <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Reviews</div>
                <div className="font-bold text-gray-800">{(service.reviews / 1000).toFixed(0)}k+</div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
              <div className="space-y-2">
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Not Included */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Not Included</h3>
              <div className="space-y-2">
                {service.excludes.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Minus className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200 mb-6">
              <div className="text-center">
                <div className="text-gray-600 font-medium mb-2">Service Cost</div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl font-bold text-blue-600">₹{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">₹{service.originalPrice}</span>
                  )}
                </div>
                <div className="text-gray-500 text-sm mt-2">*Inclusive of all taxes</div>
              </div>
            </div>

            {/* Book Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onClose()
                handleBookNow(service)
              }}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            {services.length} professional services across {categories.length - 1} categories
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing {filteredServices.length} services
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {service.originalPrice && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Header */}
              <div className={`bg-gradient-to-r ${service.color} p-4 text-white relative`}>
                <div className="flex items-center justify-between mb-2">
                  {service.icon}
                  <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">{service.category}</span>
                </div>
                <h3 className="text-lg font-bold">{service.name}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                    {service.rating}
                  </div>
                </div>

                {/* Pricing */}
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
                    onClick={(e) => {
                      e.stopPropagation()
                      handleBookNow(service)
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                </div>

                {/* Reviews */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="text-center text-xs text-gray-500">
                    {service.reviews.toLocaleString()} happy customers
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Services Found */}
        {filteredServices.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="text-xl text-gray-500">No services found in this category</p>
          </motion.div>
        )}
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
      </AnimatePresence>
    </div>
  )
}
