import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const Header = ({ title }) => {
  return (
    <div className="bg-gray-200  sm:w-full h-[50px] rounded-b-2xl flex justify-between items-center p-3 font-semibold text-lg">
      <div className="cursor-pointer">
        <AiOutlineHome />
      </div>
      <p>{title}</p>
      <div className="cursor-pointer">
        <IoIosArrowBack />
      </div>
    </div>
  );
};

export default Header;
