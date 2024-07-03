import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`sm:px-5 px-6 m-2 w-[-webkit-fill-available] rounded-full flex items-center py-5 fixed top-0 z-20  backdrop-blur-md bg-[#2f2d3542] border border-[#acacac63]`}
    >
      <div className="w-full flex justify-between items-center mx-2">
        <Link
          to="/"
          className="flex items-center gap-1"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Tushar &nbsp;<span className="lg:block hidden">| Khanagwal</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white drop-shadow-text-light"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer drop-shadow-text-light`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex flex-row gap-10  justify-end items-center">
          <Link
            to="https://drive.google.com/file/d/1RsOIbbnzwokwX69Uh_ij6II1d4nCulPv/view?usp=sharing"
            target="_blank"
            className="text-white text-[18px] font-medium cursor-pointer"
          >
            Resume
          </Link>
          <Link
            to="https://www.linkedin.com/in/tushar-khanagwal/"
            className="text-white text-[18px] font-medium cursor-pointer"
          >
            LinkedIn
          </Link>
        </div>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  backdrop-blur-md bg-[#2f2d35f6] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                className={`${
                  active === "Resume" ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
              >
                <Link
                  to="https://drive.google.com/file/d/1RsOIbbnzwokwX69Uh_ij6II1d4nCulPv/view?usp=sharing"
                  target="_blank"
                  onClick={() => setToggle(!toggle)}
                >
                  Resume
                </Link>
              </li>
              <li
                className={`${
                  active === "LinkedIn" ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
              >
                <Link
                  to="https://www.linkedin.com/in/tushar-khanagwal/"
                  onClick={() => setToggle(!toggle)}
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
