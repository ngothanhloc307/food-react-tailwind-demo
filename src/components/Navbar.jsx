import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">East</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex item-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 ">
          Best <span className="font-bold">East</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="py-4 text-xl flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Order
            </li>
            <li className="py-4 text-xl flex">
              <MdFavorite size={25} className="mr-4" />
              Favourites
            </li>
            <li className="py-4 text-xl flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="py-4 text-xl flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="py-4 text-xl flex">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="py-4 text-xl flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="py-4 text-xl flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
