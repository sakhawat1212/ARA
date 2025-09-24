import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

const AccessoriesSection = ({ category }) => {
  const navigate = useNavigate();
  const textItems = category.text.split("\n"); // sidebar items
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    textItems[0]
  );
  const [allProducts, setAllProducts] = useState([]);

  // Helper: gather all products, ordering selected subcategory first
  const gatherProducts = (selected) => {
    let products = [];

    // First, find selected subcategory
    const selectedSub =
      category.children.find((c) => c.name === selected) || category.children[0];

    if (selectedSub.children && selectedSub.children.length > 0) {
      products.push(...selectedSub.children);
    } else {
      products.push(selectedSub);
    }

    // Then, add other subcategories
    category.children.forEach((sub) => {
      if (sub.name === selectedSub.name) return; // skip selected
      if (sub.children && sub.children.length > 0) {
        products.push(...sub.children);
      } else {
        products.push(sub);
      }
    });

    return products;
  };

  // Initialize products on mount
  useEffect(() => {
    setAllProducts(gatherProducts(selectedSubCategory));
  }, [selectedSubCategory, category.children]);

  // Sidebar click handler
  const handleSubCategoryClick = (item) => {
    setSelectedSubCategory(item);
    setAllProducts(gatherProducts(item));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="flex flex-col gap-2 w-1/4">
          {textItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleSubCategoryClick(item)}
              className={`text-left px-3 py-2 rounded-md font-medium cursor-pointer text-sm ${
                selectedSubCategory === item
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-black hover:bg-purple-100"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-3/4">
          {allProducts.map((product, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/accessories/${slugify(product.name)}`)}
              className="bg-gray-100 rounded-md p-3 flex flex-col items-center text-center shadow-md cursor-pointer hover:shadow-lg"
            >
              <div className="bg-white flex justify-center items-center h-32 w-full mb-2">
                <img
                  src={product.img || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="object-contain max-h-28"
                />
              </div>
              <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
              <p className="text-xs text-gray-600 mb-1 truncate">
                {product.desc}
              </p>
              <p className="font-bold text-sm">{product.price}</p>
              <button className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 mt-2 text-xs">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesSection;
