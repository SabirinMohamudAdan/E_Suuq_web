import React from "react";

function AllProducts({ image, title, price, description }) {
  // Haddii price uu jiro, muuji dolar ka hor, haddii aan jirin muuji "Qiime la'aan"
  const displayPrice = price !== undefined ? `$${price}` : "Qiime la'aan";

  return (
    <div className="border rounded-lg shadow-md p-4 w-64 mx-auto my-4">
      <img
        src={`http://localhost:4002/allimages/${image}`}
        alt={title || "Product image"}
        className="w-full h-40 object-contain rounded-md mb-3"
      />
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <span className="text-lg font-bold ml-2">{displayPrice}</span>
      </div>
      <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
    </div>
  );
}

export default AllProducts;