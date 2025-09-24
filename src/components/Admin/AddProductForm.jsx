import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";

const AddProductForm = ({ category, onClose }) => {
  const { addProduct } = useProducts();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [brand, setBrand] = useState("Toyota");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Product name required!");
      return;
    }

    const newProduct = {
      id: Date.now(), // unique id
      name,
      desc,
      price,
      img: img || "https://via.placeholder.com/150",
      brand: category === "Brands" ? brand : undefined, // brand sirf tab lagao jab Brands category ho
    };

    addProduct(category, newProduct);
    onClose();

    // reset form after submit
    setName("");
    setDesc("");
    setPrice("");
    setImg("");
    setBrand("Toyota");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80 flex flex-col gap-3">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Add Product to {category}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {category === "Brands" && (
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="border border-gray-300 p-2 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Toyota</option>
              <option>Honda</option>
              <option>Suzuki</option>
              <option>Hyundai</option>
              <option>Kia</option>
            </select>
          )}

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="border border-gray-300 p-2 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 p-2 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="border border-gray-300 p-2 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex justify-between mt-3">
            <button
              type="button"
              className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
