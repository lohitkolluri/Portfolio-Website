import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, SetActive] = useState("");
  return (
    <nav
      className={
        "${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary"
      }
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex item-center gap-2"
          onClick={() => {
            SetActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Lohit Kolluri{" "}
            <span className="sm:block hidden">| Software Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={${}}
            >
            <a href={'#${link.id}'}>{link.title}</a>
            </li>
          ))} 
          </ul> 
      </div>
    </nav>
  )
}

export default Navbar;