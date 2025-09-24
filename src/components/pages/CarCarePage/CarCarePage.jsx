import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import carCareData from "../../../data/CarCareData";

const CarCarePage = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  // ✅ slugify helper
  const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

  let mainProduct = null;
  let relatedProducts = [];

  // Search all categories + children for product
  for (const category of carCareData) {
    const allProducts = [
      ...(category.products || []),
      ...(category.children || []).flatMap((c) => c.products || []),
    ];

    const found = allProducts.find((p) => slugify(p.name) === productName);
    if (found) {
      mainProduct = found;
      relatedProducts = allProducts
        .filter((p) => slugify(p.name) !== productName)
        .slice(0, 4);
      break;
    }
  }

  if (!mainProduct)
    return <p className="text-center text-red-500 mt-10">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      {/* Main Product */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6">
        <img
          src={mainProduct.img || "https://via.placeholder.com/150"}
          alt={mainProduct.name}
          className="w-40 h-40 object-cover rounded-md"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">{mainProduct.name}</h2>
          {mainProduct.desc && (
            <p className="text-gray-600 mb-2">{mainProduct.desc}</p>
          )}
          <p className="font-bold text-lg mb-2">{mainProduct.price}</p>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((prod, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/carcare/${slugify(prod.name)}`)}
                className="bg-gray-100 rounded-md p-3 flex flex-col items-center text-center shadow-md cursor-pointer hover:shadow-lg"
              >
                <img
                  src={prod.img || "https://via.placeholder.com/120"}
                  alt={prod.name}
                  className="w-24 h-24 object-cover mb-2"
                />
                <h3 className="font-semibold text-sm mb-1">{prod.name}</h3>
                <p className="font-bold text-sm">{prod.price}</p>
                <button className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 mt-2 text-xs">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CarCarePage;
