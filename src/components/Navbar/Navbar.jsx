// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownBrands from "../Dropdown/DropdownBrands";
import DropdownAccessories from "../Dropdown/DropdownAccessories";
import DropdownCarCare from "../Dropdown/DropdownCarCare";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-purple-600 text-white px-6 py-3 shadow-md relative z-50 flex items-center">
      <ul className="flex space-x-6">
        {/* Home */}
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${isActive ? "bg-purple-800" : "hover:bg-purple-700"}`
            }
          >
            Home
          </NavLink>
        </li>

        {/* Brands */}
        <li
          className="relative"
          onMouseEnter={() => setActiveDropdown("brands")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span className="px-3 py-2 rounded-md cursor-pointer hover:bg-purple-700">
            Brands
          </span>
          {activeDropdown === "brands" && (
            <div className="absolute left-0 top-full mt-1 z-50">
              <DropdownBrands closeNavbarDropdown={() => setActiveDropdown(null)} />
            </div>
          )}
        </li>

        {/* Accessories */}
        <li
          className="relative"
          onMouseEnter={() => setActiveDropdown("accessories")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span className="px-3 py-2 rounded-md cursor-pointer hover:bg-purple-700">
            Accessories
          </span>
          {activeDropdown === "accessories" && (
            <div className="absolute left-0 top-full mt-1 z-50">
              <DropdownAccessories closeNavbarDropdown={() => setActiveDropdown(null)} />
            </div>
          )}
        </li>

        {/* Car Care */}
        <li
          className="relative"
          onMouseEnter={() => setActiveDropdown("carCare")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span className="px-3 py-2 rounded-md cursor-pointer hover:bg-purple-700">
            Car Care
          </span>
          {activeDropdown === "carCare" && (
            <div className="absolute left-0 top-full mt-1 z-50">
              <DropdownCarCare closeNavbarDropdown={() => setActiveDropdown(null)} />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
