import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    // Close menu if clicking outside
    if (!e.target.closest(".menu-wrapper")) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="menu-wrapper relative">
      {/* Hamburger */}
      <div
        onClick={toggleMenu}
        className={`hamburger flex flex-col space-y-1 cursor-pointer ${
          isOpen ? "active" : ""
        }`}
      >
        <span
          className={`w-8 h-1 bg-black transition-transform transform ${
            isOpen ? "rotate-45 origin-top-left" : ""
          }`}
        ></span>
        <span
          className={`w-8 h-1 bg-black transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-8 h-1 bg-black transition-transform transform ${
            isOpen ? "-rotate-45 origin-bottom-left" : ""
          }`}
        ></span>
      </div>

      {/* Background */}
      <div
        className={`nav-background fixed top-16 right-0 h-[calc(100vh-60px)] bg-black z-5 transition-all ${
          isOpen ? "w-full md:w-2/3" : "w-0"
        }`}
      ></div>

      {/* Navigation Links */}
      <ul
        className={`nav-links fixed top-20 right-5 opacity-0 z-10 list-none transform ${
          isOpen ? "opacity-100 translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <li className="py-2">
          <a
            href="../index.html"
            className="text-black text-xl font-bold block hover:text-gray-500"
          >
            Home
          </a>
        </li>
        <li className="py-2">
          <a
            href="../project_section/index.html"
            className="text-black text-xl font-bold block hover:text-gray-500"
          >
            Project
          </a>
        </li>
        <li className="py-2">
          <a
            href="./index.html"
            className="text-black text-xl font-bold block hover:text-gray-500"
          >
            About Us
          </a>
        </li>
        <li className="py-2">
          <a
            href="../contact-form-10 2/index.html"
            className="text-black text-xl font-bold block hover:text-gray-500"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;