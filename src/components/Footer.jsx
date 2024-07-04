import React from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { logo2, mySing } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800 pt-24">
      <div className="mx-auto flex max-w-6xl pb-10 items-start space-x-8 flex-row">
        <div className="px-4 w-1/2">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo2}
              alt="logo"
              className="w-20 h-20 object-contain bg-white rounded-full"
            />
          </Link>
        </div>
        <div
          className={`${styles.normalText} mt-0 grid grid-cols-2 gap-6 lg:w-3/4 lg:grid-cols-2 justify-items-end`}
        >
          <ul className="mb-8 lg:mb-0 space-y-4 list-none">
            <p className={`mb-6 text-lg font-semibold text-white`}>MAIN</p>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`hover:text-white text-[18px] cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white ">CONECT</p>
            <ul className="flex flex-col space-y-4">
              <li
                className={`hover:text-white text-[18px]  cursor-pointer drop-shadow-text-light`}
              >
                <a href="https://www.linkedin.com/in/tushar-khanagwal">
                  LinkedIn
                </a>
              </li>
              <li
                className={`hover:text-white text-[18px] cursor-pointer drop-shadow-text-light`}
              >
                <a
                  href="https://drive.google.com/file/d/1RsOIbbnzwokwX69Uh_ij6II1d4nCulPv/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto mt-3 max-w-6xl items-center md:items-start px-4 lg:px-0">
        <div className="inline-flex items-center">
          <img src={mySing} alt="mySing" className="object-contain" />
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2023 Tushar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
