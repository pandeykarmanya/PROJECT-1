"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import BookingPage from "@/components/booking-page"
import PaymentPage from "@/components/payment-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"booking" | "payment">("booking")
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    price: 0,
  })

  const handleBookingSubmit = (data: typeof bookingData) => {
    setBookingData(data)
    setCurrentPage("payment")
  }

  const handleBackToBooking = () => {
    setCurrentPage("booking")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background based on current page */}
      <div className="absolute inset-0">
        {currentPage === "booking" ? (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Service-related background elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
            <div className="absolute top-1/3 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-200/30 rounded-full blur-2xl"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            {/* Payment-related background elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
            <div className="absolute top-1/4 right-10 w-40 h-40 bg-teal-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-32 left-10 w-36 h-36 bg-cyan-200/30 rounded-full blur-2xl"></div>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {currentPage === "booking" ? (
          <BookingPage key="booking" onSubmit={handleBookingSubmit} />
        ) : (
          <PaymentPage key="payment" bookingData={bookingData} onBack={handleBackToBooking} />
        )}
      </AnimatePresence>
    </div>
  )
}
