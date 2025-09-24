import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import accessoriesData from "../../../data/accessories";

// Recursive search for category by slug
const findCategory = (data, name) => {
  for (let item of data) {
    if (item.slug === name) return item;
    if (item.children) {
      const found = findCategory(item.children, name);
      if (found) return found;
    }
  }
  return null;
};

const AccessoriesProductPage = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [productsToShow, setProductsToShow] = useState([]);

  // Find main category
  const mainCategory = findCategory(accessoriesData, productName);

  useEffect(() => {
    if (!mainCategory) return;

    // Default to first child if nothing selected
    const subCat =
      selectedSubCategory ||
      (mainCategory.children && mainCategory.children[0]) ||
      mainCategory;

    setSelectedSubCategory(subCat);

    // Show all products under the subcategory
    const products =
      subCat.children && subCat.children.length > 0
        ? subCat.children
        : [subCat];

    setProductsToShow(products);
  }, [mainCategory, selectedSubCategory]);

  if (!mainCategory) {
    return <p className="text-center mt-6">No products found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Sidebar + Products */}
      {mainCategory.children && (
        <div className="flex gap-6 mb-6">
          {/* Sidebar */}
          <div className="flex flex-col w-1/4 gap-2">
            {mainCategory.children.map((sub, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-md cursor-pointer text-sm font-medium ${
                  selectedSubCategory === sub
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-black hover:bg-purple-100"
                }`}
                onClick={() => setSelectedSubCategory(sub)}
              >
                {sub.name}
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-3/4">
            {productsToShow.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-md cursor-pointer"
                onClick={() =>
                  navigate(`/accessories/${prod.slug || prod.name}`)
                }
              >
                <img
                  src={prod.img || "https://via.placeholder.com/150"}
                  alt={prod.name}
                  className="w-36 h-36 object-cover mb-3 rounded-md"
                />
                <h3 className="font-semibold text-base mb-1">{prod.name}</h3>
                <p className="text-sm text-gray-600 mb-1 truncate">
                  {prod.desc || "No description"}
                </p>
                <p className="font-bold text-base text-purple-600">
                  {prod.price || ""}
                </p>
                <button className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 mt-2 text-sm">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessoriesProductPage;
