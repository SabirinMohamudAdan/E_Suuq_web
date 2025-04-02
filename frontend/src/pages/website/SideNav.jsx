import React from "react";
import { Link } from "react-router-dom";
import { FaBox, FaUsers, FaShoppingCart, FaUserShield } from "react-icons/fa";

function SideNav() {
  return (
    <div>
      {/* Sidebar */}
      <div className="bg-slate-800 w-[20%] h-screen fixed flex flex-col p-5 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
            <FaBox />{" "}
            <Link to="/ProductDashboard">
              <span>Products</span>
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
            <FaUsers /> <span>Customers</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
            <FaShoppingCart /> <span>Orders</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
            <FaUserShield /> <span>Users</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
