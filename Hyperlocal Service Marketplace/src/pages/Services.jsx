// src/pages/Services.jsx
"use client";

import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import ServiceModal from "../components/ServiceModal";

const dummyServices = [
  {
    id: 1,
    title: "Haircut at Home",
    shortDescription: "Professional haircut in your comfort zone.",
    image: "https://i.postimg.cc/W3tJ73h6/home.webp",
    rating: 4.8,
    price: 299,
    originalPrice: 499,
    category: "Salon",
    duration: "45 min",
    professionals: 25,
    bookings: 12000,
    reviewCount: 3200,
    badge: "Best Seller",
    included: [
      "Trained barber",
      "Haircut",
      "Beard styling (optional)"
    ],
    notIncluded: [
      "Hair coloring",
      "Hair treatments"
    ]
  },
  {
    id: 2,
    title: "Deep Home Cleaning",
    shortDescription: "Complete deep cleaning of your home by experts.",
    image: "https://i.postimg.cc/WzCmZZ8k/images-2.jpg",
    rating: 4.9,
    price: 999,
    originalPrice: 1499,
    category: "Cleaning",
    duration: "2 hrs",
    professionals: 15,
    bookings: 8000,
    reviewCount: 2100,
    badge: "Top Rated",
    included: [
      "Dusting and wiping",
      "Vacuuming and mopping",
      "Kitchen and bathroom cleaning"
    ],
    notIncluded: [
      "Carpet cleaning",
      "Window cleaning"
    ]
  },
  {
    id: 3,
    title: "AC Service & Repair",
    shortDescription: "Keep your AC running smoothly with professional service.",
    image: "https://i.postimg.cc/d3x69psD/2.jpg",
    rating: 4.7,
    price: 599,
    originalPrice: 899,
    category: "Repair",
    duration: "1 hr",
    professionals: 18,
    bookings: 9500,
    reviewCount: 1900,
    badge: "Popular",
    included: [
      "AC cleaning",
      "Coolant check",
      "Performance check"
    ],
    notIncluded: [
      "Part replacement",
      "Major repairs"
    ]
  },
  {
    id: 4,
    title: "Pest Control",
    shortDescription: "Get rid of pests with our safe and effective services.",
    image: "https://i.postimg.cc/CxWt0BVd/images-1.jpg",
    rating: 4.6,
    price: 749,
    originalPrice: 999,
    category: "Sanitization",
    duration: "1.5 hrs",
    professionals: 12,
    bookings: 6500,
    reviewCount: 1600,
    badge: "Recommended",
    included: [
      "Pest inspection",
      "Pest removal",
      "Pest control treatment"
    ],
    notIncluded: [
      "Follow-up treatments",
      "Extreme infestations"
    ]
  },
  {
    id: 5,
    title: "Massage at Home",
    shortDescription: "Relax with professional massage therapy at your home.",
    image: "https://i.postimg.cc/QtZRQB6v/shutterstock-369191648-24-hours-body-massage-centres-7-2ay37.webp",
    rating: 4.9,
    price: 699,
    originalPrice: 1099,
    category: "Wellness",
    duration: "1 hr",
    professionals: 10,
    bookings: 7200,
    reviewCount: 1750,
    badge: "Lux Service",
    included: [
      "Trained therapist",
      "Massage oil",
      "60 minutes session"
    ],
    notIncluded: [
      "Medical massage",
      "Extra time extension"
    ]
  },
  {
    id: 6,
    title: "Electrician Services",
    shortDescription: "Skilled electricians for all kinds of repairs.",
    image: "https://i.postimg.cc/g070mK28/electrician-services.jpg",
    rating: 4.5,
    price: 249,
    originalPrice: 399,
    category: "Repairs",
    duration: "30 min",
    professionals: 20,
    bookings: 5000,
    reviewCount: 1400,
    badge: "Best Seller",
    included: [
      "Electrical repairs",
      "Wiring inspection",
      "Fixture installation"
    ],
    notIncluded: [
      "New wiring installations",
      "Large appliance repairs"
    ]
  },
  {
    id: 7,
    title: "Plumber on Demand",
    shortDescription: "Experienced plumber at your doorstep in 60 mins.",
    image: "https://i.postimg.cc/3RPWCZMY/images.jpg",
    rating: 4.4,
    price: 349,
    originalPrice: 499,
    category: "Plumbing",
    duration: "40 min",
    professionals: 22,
    bookings: 4300,
    reviewCount: 900,
    badge: "Fast Service",
    included: [
      "Pipe repairs",
      "Leak detection",
      "Toilet installations"
    ],
    notIncluded: [
      "Major plumbing installations",
      "Large-scale construction work"
    ]
  },
  {
    id: 8,
    title: "Kitchen Chimney Cleaning",
    shortDescription: "Deep cleaning of chimney to remove oil & grease.",
    image: "https://i.postimg.cc/tRw4LkMj/chimney-cleaning-hometriangle-blog.jpg",
    rating: 4.6,
    price: 499,
    originalPrice: 799,
    category: "Cleaning",
    duration: "1 hr",
    professionals: 14,
    bookings: 3800,
    reviewCount: 1000,
    badge: "Highly Rated",
    included: [
      "Chimney inspection",
      "Cleaning of chimney components",
      "Grease removal"
    ],
    notIncluded: [
      "Chimney repair",
      "Chimney installations"
    ]
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50 min-h-screen">
      {dummyServices.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onClick={() => setSelectedService(service)}
        />
      ))}

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
