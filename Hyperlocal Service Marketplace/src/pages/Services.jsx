"use client";

import React from "react";
import ServiceCard from "../components/ServiceCard";

const dummyServices = [
  {
    id: 1,
    title: "Haircut at Home",
    shortDescription: "Professional haircut in your comfort zone.",
    image: "/haircut.jpg",
    rating: 4.8,
    price: 299,
    originalPrice: 499,
    category: "Salon",
    duration: "45 min",
    professionals: 25,
    bookings: 12000,
    reviewCount: 3200,
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Deep Home Cleaning",
    shortDescription: "Complete deep cleaning of your home by experts.",
    image: "/cleaning.jpg",
    rating: 4.9,
    price: 999,
    originalPrice: 1499,
    category: "Cleaning",
    duration: "2 hrs",
    professionals: 15,
    bookings: 8000,
    reviewCount: 2100,
    badge: "Top Rated",
  },
  {
    id: 3,
    title: "AC Service & Repair",
    shortDescription: "Keep your AC running smoothly with professional service.",
    image: "/ac-repair.jpg",
    rating: 4.7,
    price: 599,
    originalPrice: 899,
    category: "Repair",
    duration: "1 hr",
    professionals: 18,
    bookings: 9500,
    reviewCount: 1900,
    badge: "Popular",
  },
  {
    id: 4,
    title: "Pest Control",
    shortDescription: "Get rid of pests with our safe and effective services.",
    image: "/pest.jpg",
    rating: 4.6,
    price: 749,
    originalPrice: 999,
    category: "Sanitization",
    duration: "1.5 hrs",
    professionals: 12,
    bookings: 6500,
    reviewCount: 1600,
    badge: "Recommended",
  },
  {
    id: 5,
    title: "Massage at Home",
    shortDescription: "Relax with professional massage therapy at your home.",
    image: "/massage.jpg",
    rating: 4.9,
    price: 699,
    originalPrice: 1099,
    category: "Wellness",
    duration: "1 hr",
    professionals: 10,
    bookings: 7200,
    reviewCount: 1750,
    badge: "Lux Service",
  },
  {
    id: 6,
    title: "Electrician Services",
    shortDescription: "Skilled electricians for all kinds of repairs.",
    image: "/electrician.jpg",
    rating: 4.5,
    price: 249,
    originalPrice: 399,
    category: "Repairs",
    duration: "30 min",
    professionals: 20,
    bookings: 5000,
    reviewCount: 1400,
    badge: "Best Seller",
  },
  {
    id: 7,
    title: "Plumber on Demand",
    shortDescription: "Experienced plumber at your doorstep in 60 mins.",
    image: "/plumber.jpg",
    rating: 4.4,
    price: 349,
    originalPrice: 499,
    category: "Plumbing",
    duration: "40 min",
    professionals: 22,
    bookings: 4300,
    reviewCount: 900,
    badge: "Fast Service",
  },
  {
    id: 8,
    title: "Kitchen Chimney Cleaning",
    shortDescription: "Deep cleaning of chimney to remove oil & grease.",
    image: "/chimney.jpg",
    rating: 4.6,
    price: 499,
    originalPrice: 799,
    category: "Cleaning",
    duration: "1 hr",
    professionals: 14,
    bookings: 3800,
    reviewCount: 1000,
    badge: "Highly Rated",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50 min-h-screen">
      {dummyServices.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          onClick={() => console.log("Clicked:", service.title)}
        />
      ))}
    </div>
  );
}
