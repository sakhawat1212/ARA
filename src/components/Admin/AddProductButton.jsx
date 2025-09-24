// src/components/Admin/AddProductButton.jsx
import React, { useState } from "react";
import AddProductForm from "./AddProductForm";

const AddProductButton = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <div className="relative flex justify-end p-4">
      {/* Button */}
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(true)}
        onMouseLeave={() => setOpenDropdown(false)}
      >
        <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 text-sm">
          Add Product
        </button>

        {/* Dropdown */}
        {openDropdown && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow">
            {["Brands", "Accessories", "CarCare"].map((cat) => (
              <button
                key={cat}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
                onClick={() => {
                  setCategory(cat);
                  setOpenForm(true);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Form Modal */}
      {openForm && (
        <AddProductForm
          category={category}
          onClose={() => setOpenForm(false)}
        />
      )}
    </div>
  );
};

export default AddProductButton;
