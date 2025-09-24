// src/components/BrandsSection/BrandsSection.jsx
import React from "react";

const BrandsSection = () => {
  const brands = [
    { id: 1, name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.png" },
    { id: 2, name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda-logo.png" },
    { id: 3, name: "Suzuki", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Suzuki_logo_2.svg" },
    { id: 4, name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
    { id: 5, name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
    { id: 6, name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_logo.svg" },
    { id: 7, name: "Kia", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Kia_logo.svg" },
    { id: 8, name: "Nissan", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nissan_logo.png" },
    { id: 9, name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Audi_logo_detail.svg" },
    { id: 10, name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6">Brands We Offer</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {brands.map((brand) => (
          <div key={brand.id} className="flex flex-col items-center">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-sm font-medium">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
