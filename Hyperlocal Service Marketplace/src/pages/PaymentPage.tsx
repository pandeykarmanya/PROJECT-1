// src/pages/Payment.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Loader2 } from 'lucide-react';

const Payment: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-gray-900 dark:to-black p-6 flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Booking Summary */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Booking Summary</h2>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Service</span>
              <span className="font-medium text-gray-800 dark:text-white">Deluxe Room</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Check-in</span>
              <span className="text-gray-800 dark:text-white">20 July 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Check-out</span>
              <span className="text-gray-800 dark:text-white">23 July 2025</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="text-lg font-semibold text-gray-700 dark:text-white">Total</span>
              <span className="text-lg font-bold text-indigo-600">₹8,499</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Secure Payment</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Cardholder Name</label>
              <input type="text" className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Card Number</label>
              <input type="text" className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Expiry</label>
                <input type="text" className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="MM/YY" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">CVV</label>
                <input type="password" className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="123" />
              </div>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white rounded-xl py-3 font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
              <CreditCard size={18} />
              Pay ₹8,499
            </button>
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 pt-2">
              <ShieldCheck size={14} />
              Your payment is secured & encrypted
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Payment;
