// import React, { useState } from "react";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import SideNav from "./SideNav";
// import axios from "axios";

// function AddProduct() {
//   const [p_Name, setName] = useState("");
//   const [Discription, setDiscription] = useState("");
//   const [Price, setPrice] = useState("");
//   const [Category, setCategory] = useState("");
//   const [Image, setImage] = useState("");

//   let formData = new FormData();
//   formData.append("prName", p_Name);
//   formData.append("description", Discription);
//   formData.append("price", Price);
//   formData.append("category", Category);
//   formData.append("image", Image);
//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:4002/create/product", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then(() => {
//         alert("registered success");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="flex">
//       {/* Side Navigation */}
//       <SideNav />

//       {/* Main Content */}
//       <div className="flex-1 flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
//         <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-[450px] border border-gray-300">
//           <h2 className="text-3xl font-extrabold text-white mb-6 text-center tracking-wide">
//             Add New Product
//           </h2>

//           {/* Product Form */}
//           <form className="space-y-5">
//             <input
//               value={p_Name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Product Name"
//               className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <textarea
//               value={Discription}
//               onChange={(e) => setDiscription(e.target.value)}
//               placeholder="Description"
//               className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//             ></textarea>
//             <input
//               value={Price}
//               onChange={(e) => setPrice(e.target.value)}
//               s
//               type="number"
//               placeholder="Price"
//               className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               value={Category}
//               onChange={(e) => setCategory(e.target.value)}
//               type="text"
//               placeholder="Category"
//               className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Image Upload */}
//             <label className="block text-gray-300 font-semibold">
//               Upload Image:
//             </label>
//             <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-400 p-4 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-800 transition">
//               <input
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//                 className="hidden"
//                 id="fileInput"
//               />
//               <label
//                 htmlFor="fileInput"
//                 className="flex flex-col items-center cursor-pointer"
//               >
//                 <FaCloudUploadAlt className="text-4xl text-gray-400" />
//                 <span className="text-gray-400 text-sm">Click to Upload</span>
//               </label>
//             </div>
//             {previewImage && (
//               <img
//                 src={previewImage}
//                 alt="Preview"
//                 className="w-32 h-32 object-cover rounded-lg mx-auto mt-3 shadow-md border-2 border-gray-500"
//               />
//             )}

//             {/* Buttons */}
//             <div className="flex justify-between mt-6">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
//               >
//                 Add Product
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;

import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import SideNav from "./SideNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  // State Variables to Store Form Inputs
  const [pName, setPName] = useState(""); // Product Name
  const [description, setDescription] = useState(""); // Product Description
  const [price, setPrice] = useState(""); // Product Price
  const [category, setCategory] = useState(""); // Product Category
  const [image, setImage] = useState(null); // Image File
  const [previewImage, setPreviewImage] = useState(null); // Preview Image Before Uploading

  const Navigate = useNavigate();

  // Function to Handle Image Selection and Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Function to Handle Form Submission
  const handleAddProduct = (e) => {
    e.preventDefault();

    // Create FormData to Send File & Product Info
    let formData = new FormData();
    formData.append("prName", pName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image);

    // API Call to Add Product
    axios
      .post("http://localhost:4002/create/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        toast.success("Product registered successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          onClose: () => Navigate("/ProductDashboard"),
        });

        // Clear form fields after successful submission
        setPName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImage(null);
        setPreviewImage(null);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        toast.error("Failed to add product. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <div>
      <div className="flex">
        {/* Side Navigation */}
        <SideNav />

        {/* Main Content */}
        <div className="flex-1 flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-[450px] border border-gray-300">
            <h2 className="text-3xl font-extrabold text-white mb-6 text-center tracking-wide">
              Add New Product
            </h2>

            {/* Product Form */}
            <form className="space-y-5" onSubmit={handleAddProduct}>
              {/* Product Name Input */}
              <input
                value={pName}
                onChange={(e) => setPName(e.target.value)}
                type="text"
                placeholder="Product Name"
                className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Product Description Input */}
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              ></textarea>

              {/* Product Price Input */}
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price"
                className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Product Category Input */}
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Category"
                className="w-full p-3 border border-gray-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Image Upload */}
              <label className="block text-gray-300 font-semibold">
                Upload Image:
              </label>
              <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-400 p-4 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-800 transition">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                  id="fileInput"
                  accept="image/*"
                  required
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
                  onClick={() => window.history.back()} // Close or Go Back
                  className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddProduct;
