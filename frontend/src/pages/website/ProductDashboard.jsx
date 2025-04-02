import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import SideNav from "./SideNav";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDashboard() {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Products from API
  const handleGetData = async () => {
    try {
      const res = await axios.get("http://localhost:4002/read/product1");
      setGetData(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  // Handle Delete Function (No filter, it just refreshes data)
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await axios.delete(
          `http://localhost:4002/product/delete/${id}`
        );

        if (response.status === 200) {
          toast.success("Product deleted successfully!", {
            position: "top-center",
            autoClose: 2000,
          });

          // ✅ Instead of filtering, it simply fetches data again
          handleGetData();
        } else {
          throw new Error("Failed to delete product.");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product. Try again.");
      }
    }
  };

  return (
    <>
      <SideNav />
      <div className="ml-64 p-10 min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-6 text-center tracking-wide">
          Product Dashboard
        </h1>

        {/* ✅ Toast Container */}
        <ToastContainer />

        {/* Add Product Button */}
        <div className="mb-6 flex justify-end">
          <button className="bg-green-500 text-white px-5 py-3 rounded-lg flex items-center gap-3 shadow-lg hover:bg-green-600 transition transform hover:scale-105">
            <FaPlus /> <Link to="/AddProduct">Add Product</Link>
          </button>
        </div>

        {/* Product Table */}
        <div className="bg-white/10 w-[90%] ml-32 backdrop-blur-lg p-6 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Product List
          </h2>

          {/* Loading Message */}
          {loading && (
            <p className="text-center text-yellow-400">Loading products...</p>
          )}

          {/* Error Message */}
          {error && <p className="text-center text-red-400">{error}</p>}

          {/* No Products Found */}
          {!loading && !error && getData.length === 0 && (
            <p className="text-center text-gray-300">No products found.</p>
          )}

          {/* Product Table */}
          {!loading && !error && getData.length > 0 && (
            <table className="w-full border-collapse shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-700 text-gray-300 text-lg">
                  <th className="p-4 border text-center w-1/6">Image</th>
                  <th className="p-4 border text-center w-1/6">Name</th>
                  <th className="p-4 border text-center w-2/6">Description</th>
                  <th className="p-4 border text-center w-1/6">Price</th>
                  <th className="p-4 border text-center w-1/6">Category</th>
                  <th className="p-4 border text-center w-1/6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((items) => (
                  <tr
                    key={items._id}
                    className="text-center bg-white/10 hover:bg-white/20 transition transform "
                  >
                    <td className="p-4 border">
                      <img
                        src={`http://localhost:4002/allimages/${items.image}`}
                        alt={items.prName}
                        className="w-16 h-16 object-cover rounded-lg shadow-md mx-auto"
                      />
                    </td>
                    <td className="p-4 border text-gray-200">{items.prName}</td>
                    <td className="p-4 border text-gray-300">
                      {items.description}
                    </td>
                    <td className="p-4 border text-green-400 font-bold">
                      ${items.price}
                    </td>
                    <td className="p-4 border text-gray-300">
                      {items.category}
                    </td>
                    <td className="p-4 border flex justify-center gap-4">
                      <button className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110">
                        <Link to={`/UpdateProduct/${items._id}`}>
                          <FaEdit size={20} />
                        </Link>
                      </button>

                      <button
                        className="text-red-400 hover:text-red-600 transition transform hover:scale-110"
                        onClick={() => handleDelete(items._id)}
                      >
                        <Link>
                          <FaTrash size={20} />
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDashboard;
