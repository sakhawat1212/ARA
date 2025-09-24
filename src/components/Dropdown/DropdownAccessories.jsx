import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import accessories from "../../data/accessories.js";

const DropdownItem = ({ item, navigate, closeNavbarDropdown }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleMouseEnter = () => {
    if (hasChildren) setOpen(true);
  };

  // ✅ Convert name → slug (Carpet Mats → carpet-mats)
  const slugify = (str) =>
    str.toLowerCase().replace(/\s+/g, "-");

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        onClick={() => {
          if (!hasChildren) {
            navigate(`/accessories/${slugify(item.name)}`, {
              state: { product: item },
            });
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
        <ul className="absolute top-0 left-full bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
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

const DropdownAccessories = ({ closeNavbarDropdown }) => {
  const navigate = useNavigate();

  return (
    <ul className="bg-white text-gray-700 shadow-lg rounded-md w-56">
      {accessories.map((item, index) => (
        <DropdownItem
          key={index}
          item={item}
          navigate={navigate}
          closeNavbarDropdown={closeNavbarDropdown}
        />
      ))}
    </ul>
  );
};

export default DropdownAccessories;
