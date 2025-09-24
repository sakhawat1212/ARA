// src/components/TopBar/TopBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../../context/CartContext";
import products from "../../data/products";
import CartSidebar from "../CartSidebar/CartSidebar";

const TopBar = () => {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");  
  const [suggestions, setSuggestions] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const inputRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });

  // Update suggestions and position
  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      setActiveProduct(null);
      return;
    }

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setSuggestions(filtered);
    setActiveProduct(filtered[0] || null);

    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [search]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        !document.getElementById("search-dropdown")?.contains(event.target)
      ) {
        setSuggestions([]);
        setActiveProduct(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add to cart + open sidebar
  const handleAddToCart = (prod) => {
    addToCart({ ...prod, quantity: 1 });
    setIsSidebarOpen(true);
  };

  // Dropdown portal
  const dropdown = suggestions.length ? createPortal(
    <div
      id="search-dropdown"
      className="absolute bg-gray-100 border border-gray-300 rounded-lg shadow-lg flex gap-4 p-2 z-[20000]"
      style={{ top: dropdownPos.top, left: dropdownPos.left, width: dropdownPos.width }}
    >
      {/* Suggestions List */}
      <div className="flex-1 flex flex-col gap-1 max-h-64 overflow-y-auto">
        {suggestions.map(p => (
          <div
            key={p.id}
            onClick={() => {
              setActiveProduct(p);
              setSearch(p.name);
              setSuggestions([]);
            }}
            className="px-3 py-2 cursor-pointer rounded hover:bg-purple-50 text-sm"
          >
            {p.name}
          </div>
        ))}
      </div>

      {/* Product Preview */}
      {activeProduct && (
        <div className="w-64 bg-gray-50 p-3 rounded shadow-inner flex flex-col items-center text-center">
          <img
            src={activeProduct.img || "https://via.placeholder.com/150"}
            alt={activeProduct.name}
            className="h-24 w-24 object-contain mb-2"
          />
          <h4 className="font-semibold text-sm">{activeProduct.name}</h4>
          <p className="text-purple-600 font-bold mb-1">{activeProduct.price}</p>
          <p className="text-gray-500 text-xs mb-2 line-clamp-3">{activeProduct.desc}</p>
          <button
            onClick={() => handleAddToCart(activeProduct)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
          >
            Add To Cart
          </button>
        </div>
      )}
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* Navbar */}
      <div className="bg-blue-100 px-6 py-4 flex justify-center relative z-50">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-6xl flex items-center justify-between px-6 py-3 relative">
          {/* Left: Logo + Store Name */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Store Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-bold text-gray-800">ARA</span>
          </div>

          {/* Center: Search bar */}
          <div className="flex-1 mx-6">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              ref={inputRef}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right: Call / WhatsApp */}
          <div className="flex items-center space-x-4 text-gray-700 font-medium">
            <a href="tel:+1234567890" className="hover:text-blue-500">Call: +1 234 567 890</a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Cart Sidebar (portal so it overlaps everything) */}
      {createPortal(
        <CartSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          className="fixed top-0 right-0 h-full z-[20000]"
        />,
        document.body
      )}

      {/* Dropdown outside navbar */}
      {dropdown}
    </>
  );
};

export default TopBar;
