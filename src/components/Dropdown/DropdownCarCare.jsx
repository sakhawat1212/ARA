// src/components/CarCare/DropdownCarCare.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import carCareData from "../../data/CarCareData";

// Slug helper
const toSlug = (name) => name.toLowerCase().replace(/[\s/]+/g, "-");

const DropdownItem = ({ item, navigate, closeNavbarDropdown }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;
  const hasProducts = item.products && item.products.length > 0;

  const handleMouseEnter = () => {
    if (hasChildren) setOpen(true);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        onClick={() => {
          if (!hasChildren || hasProducts) {
            navigate(`/carcare/${toSlug(item.name)}`);
            if (closeNavbarDropdown) closeNavbarDropdown();
          }
        }}
        className={`flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-purple-100 text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis ${
          hasChildren ? "font-medium" : ""
        }`}
      >
        {item.name}
        {hasChildren && <span className="ml-2">→</span>}
      </div>

      {hasChildren && open && (
        <ul className="absolute top-0 left-full bg-white shadow-lg rounded-md py-2 min-w-[160px] z-50">
          {item.children.map((child, idx) => (
            <DropdownItem
              key={idx}
              item={typeof child === "string" ? { name: child, children: [] } : child}
              navigate={navigate}
              closeNavbarDropdown={closeNavbarDropdown}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const DropdownCarCare = ({ closeNavbarDropdown }) => {
  const navigate = useNavigate();

  return (
    <ul className="bg-white text-gray-700 shadow-lg rounded-md w-56">
      {carCareData.slice(0, 7).map((cat, index) => (
        <DropdownItem
          key={index}
          item={cat}
          navigate={navigate}
          closeNavbarDropdown={closeNavbarDropdown}
        />
      ))}
    </ul>
  );
};

export default DropdownCarCare;
