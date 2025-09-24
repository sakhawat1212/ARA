import React, { useState } from "react";

const DropdownItem = ({ item, navigate, closeDropdown }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = (e) => {
    e.stopPropagation();

    if (!hasChildren) {
      // Leaf clicked → navigate
      navigate(`/${item.type}/${item.name}`, { state: { product: item } });
      // Close all parents including top-level
      if (closeDropdown) closeDropdown();
    } else {
      setOpen(!open); // toggle child
    }
  };

  return (
    <li className="relative">
      <div
        onClick={handleClick}
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
              item={child}
              navigate={navigate}
              closeDropdown={() => setOpen(false) && closeDropdown?.()}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownItem;
