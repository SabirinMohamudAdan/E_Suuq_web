import React from "react";
import { FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="bg-[#1E293B] py-6 px-20 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <div className="relative rounded-full flex items-center justify-center"></div>
        <span className="text-teal-400 text-2xl font-semibold">E-Suq</span>
      </div>

      <nav className="flex space-x-6">
        <NavLink to="/">
          <a href="#" className="text-teal-400 text-2xl hover:text-teal-300">
            Home
          </a>
        </NavLink>

        <NavLink to="/product">
          <a href="#" className="text-teal-400 text-2xl hover:text-teal-300">
            Product
          </a>
        </NavLink>

        <a href="#" className="text-teal-400 text-2xl hover:text-teal-300">
          Contact
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <NavLink to="/register">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
            Register
          </button>
        </NavLink>

        <NavLink to="/Login">
          <button className="border border-teal-400 text-teal-400 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white">
            Login
          </button>
        </NavLink>

        <FaLock className="text-teal-400 text-xl cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
