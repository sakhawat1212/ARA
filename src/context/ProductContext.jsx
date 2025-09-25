// src/context/ProductContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import brandsData from "../data/brands";
import accessoriesData from "../data/accessories";
import carCareData from "../data/CarCareData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Load initial data from localStorage or fallback to static files
  const [brands, setBrands] = useState(() => {
    const saved = localStorage.getItem("brands");
    return saved ? JSON.parse(saved) : brandsData;
  });

  const [accessories, setAccessories] = useState(() => {
    const saved = localStorage.getItem("accessories");
    return saved ? JSON.parse(saved) : accessoriesData;
  });

  const [carCare, setCarCare] = useState(() => {
    const saved = localStorage.getItem("carCare");
    return saved ? JSON.parse(saved) : carCareData;
  });

  const [message, setMessage] = useState("");

  // Whenever data updates, save it to localStorage
  useEffect(() => {
    localStorage.setItem("brands", JSON.stringify(brands));
  }, [brands]);

  useEffect(() => {
    localStorage.setItem("accessories", JSON.stringify(accessories));
  }, [accessories]);

  useEffect(() => {
    localStorage.setItem("carCare", JSON.stringify(carCare));
  }, [carCare]);

  // Add product function
  const addProduct = (category, product) => {
    if (category === "Brands") {
      const brandName = product.brand || "Toyota"; // default brand if not provided
      setBrands((prev) =>
        prev.map((b) =>
          b.name === brandName
            ? {
                ...b,
                products: [
                  ...b.products,
                  {
                    ...product,
                    img: product.img || "https://via.placeholder.com/150",
                  },
                ],
              }
            : b
        )
      );
      setMessage(`Product "${product.name}" added to Brand ${brandName}`);
    } else if (category === "Accessories") {
      setAccessories((prev) => [
        ...prev,
        {
          name: product.name,
          text: product.text || "",
          children: [product],
        },
      ]);
      setMessage(`Product "${product.name}" added to Accessories`);
    } else if (category === "Car Care") {
      setCarCare((prev) => [
        ...prev,
        {
          name: product.name,
          children: [{ name: product.name, products: [product] }],
        },
      ]);
      setMessage(`Product "${product.name}" added to Car Care`);
    }

    // clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <ProductContext.Provider
      value={{ brands, accessories, carCare, addProduct, message }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// ✅ Always define hook as named export
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

// ✅ Default export = Provider
export default ProductProvider;
