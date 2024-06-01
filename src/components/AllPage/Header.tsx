import { Link, useLocation } from "react-router-dom";
import Logo from "../../../public/home/Logo.svg";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  const getLinkClasses = (path: string) => {
    return location.pathname === path ? "flex flex-col items-center gap-2" : "";
  };

  return (
    <header className="fixed z-[99] overflow-hidden w-screen md:w-full">
      {isMenuOpen && (
        <div className="bg-white/20 md:hidden backdrop-blur-sm w-full h-screen fixed z-40">
          <div className="fixed inset-0 px-4  bg-white shadow-md w-[80%] z-60 flex flex-col  md:hidden">
            <div className="flex justify-between items-center pt-6">
              <img src={Logo} alt="Logo" className="w-40" />
              <IoClose className="text-2xl text-1" onClick={toggleMenu} />
            </div>
            <ul className="flex flex-col  gap-4 pt-20 text-1 font-semibold">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Application
                </Link>
              </li>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={toggleMenu}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            <a
              href="#"
              className="bg-1 absolute bottom-12 w-28 h-10 rounded-md flex-center text-white mt-4"
              onClick={toggleMenu}
            >
              Masuk
            </a>
          </div>
        </div>
      )}
      <nav className=" bg-white py-6 ">
        <div className="wrapper flex justify-between">
          <img src={Logo} alt="Logo" />
          <div className="md:flex hidden  items-center gap-10">
            <ul className="flex items-start gap-10 text-1 font-semibold">
              <li className={getLinkClasses("/")}>
                <Link to="/">Home</Link>
                {location.pathname === "/" && (
                  <hr className="border-[1.5px] border-1 w-20" />
                )}
              </li>
              <li className={getLinkClasses("/about")}>
                <Link to="/about">About Us</Link>
                {location.pathname === "/about" && (
                  <hr className="border-[1.5px] border-1 w-20" />
                )}
              </li>
              <li className={getLinkClasses("/application")}>
                <Link to="/application">Application</Link>
                {location.pathname === "/application" && (
                  <hr className="border-[1.5px] border-1 w-20" />
                )}
              </li>
              <li className={getLinkClasses("/gallery")}>
                <Link to="/gallery">Gallery</Link>
                {location.pathname === "/gallery" && (
                  <hr className="border-[1.5px] border-1 w-20" />
                )}
              </li>
              <li className={getLinkClasses("/faq")}>
                <Link to="/faq">FAQ</Link>
                {location.pathname === "/faq" && (
                  <hr className="border-[1.5px] border-1 w-20" />
                )}
              </li>
              <li className={getLinkClasses("/contact")}>
                <Link to="/contact">Contact</Link>
                {location.pathname === "/contact" && (
                  <hr className="border-[1.5px] border-1 w-20" />
                )}
              </li>
            </ul>
            <a
              href="#"
              className="bg-1 w-28 h-10 rounded-md flex-center text-white"
            >
              Masuk
            </a>
          </div>
          <div className="md:hidden">
            <RxHamburgerMenu className="text-2xl " onClick={toggleMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
