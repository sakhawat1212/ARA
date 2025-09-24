// src/components/FeaturesSection/FeaturesSection.jsx
import React from "react";

const features = [
  {
    icon: "/icons/icon-footer-3.png",
    title: "Money Back Guarantee",
    desc: "We deliver what we show",
  },
  {
    icon: "/icons/icon-footer-3.png",
    title: "Big range of genuine products",
    desc: "Deliver items at doorstep",
  },
  {
    icon: "/icons/icon-footer-1.png",
    title: "Easy Online Shopping",
    desc: "Single click to buy products",
  },
  {
    icon: "/icons/icon-footer-1.png",
    title: "Quick Delivery service",
    desc: "Online Customer Support",
  },
  {
    icon: "/icons/icon-footer-1.png",
    title: "Secure Payments",
    desc: "Cash on delivery - Pay cash at your doorstep",
  },
  {
    icon: "/icons/icon-footer-1.png",
    title: "Confirmation email & call",
    desc: "We confirm every order before dispatch",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border-b md:border-b-0 md:border-r last:border-none pb-4 md:pb-0 pr-0 md:pr-6"
          >
            {/* Left Icon */}
            <div className="flex-shrink-0">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            {/* Right Text */}
            <div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
