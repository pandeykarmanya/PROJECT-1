"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Calendar,
  User,
  MapPin,
  Phone,
  Briefcase,
  Check,
  Shield,
  Star,
} from "lucide-react"

interface BookingData {
  name: string
  phone: string
  address: string
  service: string
  date: string
  time: string
  price: number
}

interface PaymentPageProps {
  bookingData: BookingData
  onBack: () => void
}

export default function PaymentPage({ bookingData, onBack }: PaymentPageProps) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value

    if (field === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19)
    } else if (field === "expiryDate") {
      formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2")
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5)
    } else if (field === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3)
    }

    setPaymentData((prev) => ({ ...prev, [field]: formattedValue }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validatePayment = () => {
    const newErrors: Record<string, string> = {}

    if (!paymentData.cardNumber.replace(/\s/g, "") || paymentData.cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "Valid card number is required"
    }
    if (!paymentData.expiryDate || paymentData.expiryDate.length < 5) {
      newErrors.expiryDate = "Valid expiry date is required"
    }
    if (!paymentData.cvv || paymentData.cvv.length < 3) {
      newErrors.cvv = "Valid CVV is required"
    }
    if (!paymentData.cardholderName.trim()) {
      newErrors.cardholderName = "Cardholder name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validatePayment()) return

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsProcessing(false)
    setIsSuccess(true)
  }

  const gst = Math.round(bookingData.price * 0.18)
  const platformFee = 29
  const total = bookingData.price + gst + platformFee

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 min-h-screen flex items-center justify-center p-4"
      >
        <div className="w-full max-w-md text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold text-gray-800 mb-4 font-bold"
          >
            Booking Confirmed!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mb-8 font-medium"
          >
            Your service has been booked successfully. Our professional will contact you shortly!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-xl mb-6"
          >
            <div className="text-sm text-gray-600 mb-2">Booking ID</div>
            <div className="text-xl font-bold text-blue-600 font-bold">
              UC{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-bold"
          >
            Book Another Service
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 min-h-screen flex items-center justify-center p-4 py-8"
    >
      <div className="w-full max-w-7xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center text-gray-700 mb-6 hover:text-blue-600 transition-colors duration-300 font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Booking
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-bold">Complete Payment</h1>
          <p className="text-xl text-gray-600 font-medium">Secure and encrypted payment gateway</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-bold">Booking Summary</h2>

            <div className="space-y-5">
              <div className="flex items-center text-gray-700">
                <User className="w-5 h-5 mr-4 text-blue-600" />
                <div>
                  <div className="font-semibold">{bookingData.name}</div>
                  <div className="text-sm text-gray-500">Customer</div>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-4 text-blue-600" />
                <div>
                  <div className="font-semibold">{bookingData.phone}</div>
                  <div className="text-sm text-gray-500">Contact Number</div>
                </div>
              </div>
              <div className="flex items-start text-gray-700">
                <MapPin className="w-5 h-5 mr-4 mt-1 text-blue-600" />
                <div>
                  <div className="font-semibold">{bookingData.address}</div>
                  <div className="text-sm text-gray-500">Service Address</div>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Briefcase className="w-5 h-5 mr-4 text-blue-600" />
                <div>
                  <div className="font-semibold">{bookingData.service}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                    4.8 • Professional Service
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-4 text-blue-600" />
                <div>
                  <div className="font-semibold">
                    {new Date(bookingData.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-sm text-gray-500">{bookingData.time}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Service Cost</span>
                  <span className="font-semibold">₹{bookingData.price}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>GST (18%)</span>
                  <span className="font-semibold">₹{gst}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Platform Fee</span>
                  <span className="font-semibold">₹{platformFee}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-gray-800 text-xl font-bold">
                    <span>Total Amount</span>
                    <span className="text-blue-600 font-bold">₹{total}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-bold">
              <Shield className="w-6 h-6 mr-3 text-green-500" />
              Secure Payment
            </h2>

            <form onSubmit={handlePayment} className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  <CreditCard className="inline w-4 h-4 mr-2 text-blue-600" />
                  Card Number
                </label>
                <input
                  type="text"
                  value={paymentData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-medium"
                  placeholder="1234 5678 9012 3456"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-2 font-medium">{errors.cardNumber}</p>}
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={paymentData.expiryDate}
                    onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                    className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-medium"
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm mt-2 font-medium">{errors.expiryDate}</p>}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">CVV</label>
                  <input
                    type="text"
                    value={paymentData.cvv}
                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                    className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-medium"
                    placeholder="123"
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-2 font-medium">{errors.cvv}</p>}
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wide">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={paymentData.cardholderName}
                  onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-medium"
                  placeholder="Name as on card"
                />
                {errors.cardholderName && (
                  <p className="text-red-500 text-sm mt-2 font-medium">{errors.cardholderName}</p>
                )}
              </motion.div>

              {/* Total Display */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="text-center">
                  <div className="text-gray-600 font-medium mb-2">Total Amount</div>
                  <div className="text-4xl font-bold text-blue-600 font-bold">₹{total}</div>
                  <div className="text-gray-500 text-sm mt-2">*All taxes included</div>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isProcessing}
                whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Processing Payment...
                  </div>
                ) : (
                  `Pay ₹${total} Securely`
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <Lock className="inline w-4 h-4 mr-2" />
              256-bit SSL encrypted • Your payment is 100% secure
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
