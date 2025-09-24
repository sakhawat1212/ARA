// src/components/Navbar/DropdownBrands.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import brands from "../../data/brands";

const DropdownBrands = ({ closeNavbarDropdown }) => {
  const navigate = useNavigate();

  const handleClick = (brandName) => {
    navigate(`/brands/${brandName.toLowerCase()}`);
    if (closeNavbarDropdown) closeNavbarDropdown();
  };

  return (
    <div className="bg-white text-gray-700 shadow-lg rounded-md p-4 w-[600px]">
      <div className="grid grid-cols-5 gap-3">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="px-3 py-2 text-sm border rounded cursor-pointer hover:bg-purple-100 text-center"
            onClick={() => handleClick(brand.name)}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownBrands;
