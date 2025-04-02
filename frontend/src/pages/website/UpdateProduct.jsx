// import React, { useEffect, useState } from "react";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

// function UpdateProduct() {
//   const { id } = useParams(); // Get Product ID from URL
//   const navigate = useNavigate();

//   // State Variables
//   const [pName, setPName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   // Fetch Existing Product Data
//   useEffect(() => {
//     axios
//       .get(`http://localhost:4002/read/single/${id}`)
//       .then((res) => {
//         const product = res.data[0];
//         setPName(product.prName);
//         setDescription(product.description);
//         setPrice(product.price);
//         setCategory(product.category);
//         setPreviewImage(`http://localhost:4002/${product.image}`);
//       })
//       .catch((error) => console.error("Error fetching product:", error));
//   }, [id]);

//   // Handle Image Selection & Preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   // Handle Update Form Submission
//   const handleUpdateProduct = (e) => {
//     e.preventDefault();

//     let formData = new FormData();
//     formData.append("pName", pName);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("category", category);
//     if (image) {
//       formData.append("image", image);
//     }

//     axios
//       .put(`http://localhost:4002/update/product/${id}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//       .then(() => {
//         toast.success("Product updated successfully!", {
//           position: "top-center",
//           autoClose: 2000,
//           onClose: () => navigate("/ProductDashboard"),
//         });
//       })
//       .catch((error) => {
//         console.error("Error updating product:", error);
//         toast.error("Failed to update product. Try again.");
//       });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
//       <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-[450px] border border-gray-300">
//         <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
//           Update Product
//         </h2>

//         <form className="space-y-5" onSubmit={handleUpdateProduct}>
//           <input
//             value={pName}
//             onChange={(e) => setPName(e.target.value)}
//             type="text"
//             placeholder="Product Name"
//             className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Description"
//             className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
//             required
//           ></textarea>

//           <input
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             type="number"
//             placeholder="Price"
//             className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           <input
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             type="text"
//             placeholder="Category"
//             className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
//             required
//           />

//           {/* Image Upload */}
//           <label className="block text-gray-300 font-semibold">
//             Upload New Image:
//           </label>
//           <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-400 p-4 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-800">
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="hidden"
//               id="fileInput"
//               accept="image/*"
//             />
//             <label
//               htmlFor="fileInput"
//               className="flex flex-col items-center cursor-pointer"
//             >
//               <FaCloudUploadAlt className="text-4xl text-gray-400" />
//               <span className="text-gray-400 text-sm">Click to Upload</span>
//             </label>
//           </div>

//           {/* Image Preview */}
//           {previewImage && (
//             <img
//               src={previewImage}
//               alt="Preview"
//               className="w-32 h-32 object-cover rounded-lg mx-auto mt-3 shadow-md border-2 border-gray-500"
//             />
//           )}

//           {/* Buttons */}
//           <div className="flex justify-between mt-6">
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600"
//             >
//               Update Product
//             </button>
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default UpdateProduct;

import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideNav from "./SideNav";

function UpdateProduct() {
  const { id } = useParams(); // Get Product ID from URL
  const navigate = useNavigate();

  // State Variables
  const [pName, setPName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Fetch Existing Product Data
  useEffect(() => {
    axios
      .get(`http://localhost:4002/read/single/${id}`)
      .then((res) => {
        console.log("Fetched Data:", res.data); // Debugging

        if (res.data) {
          setPName(res.data.prName);
          setDescription(res.data.description);
          setPrice(res.data.price);
          setCategory(res.data.category);
          setPreviewImage(`http://localhost:4002/${res.data.image}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        toast.error("Failed to fetch product details.");
      });
  }, [id]); // Run only once when component loads

  // Handle Image Selection & Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Show preview of new image
    }
  };

  // Handle Update Form Submission
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("prName", pName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    if (image) {
      formData.append("image", image);
    }

    axios
      .put(`http://localhost:4002/product/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        toast.success("Product updated successfully!", {
          position: "top-center",
          autoClose: 1000,
          onClose: () => navigate("/ProductDashboard"),
        });
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        toast.error("Failed to update product. Try again.");
      });
  };

  return (
    <div>
      <SideNav />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-[450px] border border-gray-300">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
            Update Product
          </h2>

          <form className="space-y-5" onSubmit={handleUpdateProduct}>
            <input
              value={pName}
              onChange={(e) => setPName(e.target.value)}
              type="text"
              placeholder="Product Name"
              className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              required
            ></textarea>

            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Price"
              className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Category"
              className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Image Upload */}
            <label className="block text-gray-300 font-semibold">
              Upload New Image:
            </label>
            <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-400 p-4 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-800">
              <input
                type="file"
                onChange={handleImageChange}
                className="hidden"
                id="fileInput"
                accept="image/*"
              />
              <label
                htmlFor="fileInput"
                className="flex flex-col items-center cursor-pointer"
              >
                <FaCloudUploadAlt className="text-4xl text-gray-400" />
                <span className="text-gray-400 text-sm">Click to Upload</span>
              </label>
            </div>

            {/* Image Preview */}
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg mx-auto mt-3 shadow-md border-2 border-gray-500"
              />
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default UpdateProduct;
