import React from "react";
import PropTypes from 'prop-types';

function AllProducts({ image, title, price, description, rating }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={`http://localhost:4002/allimages/${image || 'default.jpg'}`}
        alt={title || "Product"}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg">{title || "Product"}</h3>
          <span className="font-semibold text-blue-600">
            ${typeof price === 'number' ? price.toFixed(2) : '0.00'}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {description || "No description"}
        </p>
        {rating && (
          <div className="mt-1">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}
              >
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
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  rating: PropTypes.number
};

export default AllProducts;