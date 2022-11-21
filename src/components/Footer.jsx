import React from "react";
import { CgProfile, CgList } from "react-icons/cg";
import { BsClock } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = [
    {
      icon: <BsClock />,
      text: "فعالیت های اخیر",
      link: "/",
      id: 1,
    },
    { icon: <BiMessageDetail />, text: "پیام ها", link: "/", id: 2 },
    { icon: <CgList />, text: "سفارش ها", link: "/", id: 3 },
    { icon: <CgProfile />, text: "پروفایل", link: "/profile", id: 4 },
  ];

  return (
    <div className="bg-gray-200 w-full h-[50px] rounded-t-2xl flex justify-between items-center p-3 font-semibold text-lg">
      {data.map((link) => (
        <div
          className="footerWidget cursor-pointer hover:text-black transition-all"
          key={link.id}
        >
          <Link
            to={link.link}
            className="flex-col justify-center items-center flex"
          >
            {link.icon}
            <p className="text-xs">{link.text}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
