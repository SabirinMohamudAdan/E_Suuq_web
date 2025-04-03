import React from "react";
import iphone from "../../assets/iphone.jpg";

function AllProducts(props) {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-xs mt-10 ml-20">
      <img
        src={`http://localhost:4002/allimages/${props.image}`}
        alt="Iphone"
        className="w-full rounded-md"
      />
      <div className="mt-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <span className="text-lg  font-semibold">${props.price}</span>
      </div>
      <p className="text-gray-500">{props.description}</p>
    </div>
  );
}

export default AllProducts;
