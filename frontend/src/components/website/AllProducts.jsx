import React from "react";
import PropTypes from 'prop-types';

function AllProducts({ id, image, title, price, description, rating }) {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-xs mt-10 ml-20 hover:shadow-lg transition-shadow duration-300">
      <img
        src={`http://localhost:4002/allimages/${image || 'default-product.jpg'}`}
        alt={title || "Product image"}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold line-clamp-1" title={title}>
            {title || "Product Name"}
          </h2>
          <span className="text-lg font-semibold text-blue-600">
            ${price ? price.toFixed(2) : "0.00"}
          </span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 mb-2">
          {description || "No description available"}
        </p>
        {rating && (
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

AllProducts.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  rating: PropTypes.number
};

export default AllProducts;