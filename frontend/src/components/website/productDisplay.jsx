// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import AllProducts from "./AllProducts";
// import Skeleton from "./Skeleton";

// function ProductDisplay() {
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState("All");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const categories = [
//     { value: "All", label: "All Products" },
//     { value: "SmartPhone", label: "SmartPhone" },
//     { value: "TV", label: "TV" },
//     { value: "SmartWatch", label: "SmartWatch" },
//     { value: "Laptops", label: "Laptops" }
//   ];

//   const fetchProducts = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const res = await axios.post("http://localhost:4002/read/product", {
//         category: category === "All" ? "" : category,
//         search: searchQuery
//       });
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setError(err.response?.data?.message || "Failed to fetch products. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   }, [category, searchQuery]);

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       fetchProducts();
//     }, 500);

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [fetchProducts]);

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredProducts = products.filter(product => 
//     product?.prName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product?.description?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-4 md:p-6">
//       <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
//         Our Product Collection
//       </h1>

//       <div className="mb-6 mx-auto max-w-md">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-wrap justify-center gap-4 mb-8">
//         {categories.map((cat) => (
//           <label
//             key={cat.value}
//             className={`flex items-center cursor-pointer px-4 py-2 rounded-full transition-all ${
//               category === cat.value
//                 ? "bg-blue-500 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             <input
//               value={cat.value}
//               checked={category === cat.value}
//               onChange={handleCategoryChange}
//               type="radio"
//               name="category"
//               className="sr-only"
//             />
//             {cat.label}
//           </label>
//         ))}
//       </div>

//       {isLoading && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {[...Array(8)].map((_, i) => (
//             <Skeleton key={i} />
//           ))}
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <div className="ml-3">
//               <p className="text-sm text-red-700">{error}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {!isLoading && filteredProducts.length === 0 ? (
//         <div className="text-center py-12">
//           <svg
//             className="mx-auto h-12 w-12 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={1}
//               d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
//           <p className="mt-1 text-gray-500">
//             {searchQuery
//               ? "Try adjusting your search or filter to find what you're looking for."
//               : "There are currently no products in this category."}
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredProducts.map((data) => (
//             <AllProducts
//               key={data?._id || Math.random()}
//               id={data?._id}
//               image={data?.image}
//               title={data?.prName}
//               price={data?.price}
//               description={data?.description}
//               rating={data?.rating}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductDisplay;

import React, { useEffect, useState } from "react";
import axios from "axios";
import AllProducts from "./AllProducts";

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.post("http://localhost:4002/read/product", {
          category: category === "All" ? "" : category,
          search: searchQuery
        });
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [category, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Search and filter UI */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <AllProducts
            key={product._id}
            id={product._id}
            image={product.image}
            title={product.prName}
            price={product.price}  // Price comes directly from database
            description={product.description}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;