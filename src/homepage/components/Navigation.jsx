import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

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



  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "src/assets/homepage/peter-robbins-n6jr1PxRsRc-unsplash.jpg",
    "src/assets/homepage/sports-center.jpg",
    "src/assets/homepage/igor-batista-HQ6iybaKvF4-unsplash.jpg",
    "src/assets/homepage/pexels-unknown6user-1646735.jpg",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleacademy = () => {
    navigate('/academy');
  }

  return (
    <div>
      <header className="bg-[#FC7D65] p-8 flex justify-between items-center">
        <div className="flex flex-col">
          <div>
            <a className="ml-5 text-white">Location</a>
          </div>
          <div className="flex">
            <img
              className="w-3 mr-2"
              src="src/assets/homepage/location.svg"
              alt=""
            />
            <span className="text-white text">Mehsana, Gujarat</span>
            <img className="w-3 ml-2" src="src/assets/homepage/down.svg" alt="" />
            <img
              className="w-4 ml-5"
              src="src/assets/homepage/bell.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex">
          <input
            className="w-96 rounded-2xl h-10 pl-3"
            type="text"
            placeholder="Search"
          />
          <img
            className="w-5 -ml-10"
            src="src/assets/homepage/search.svg"
            alt=""
          />
        </div>

        <div>
          <div className="menu-wrapper relative">
            <div
              onClick={toggleMenu}
              className={`hamburger flex flex-col space-y-1 cursor-pointer ${
                isOpen ? "active" : ""
              }`}
            >
              <span
                className={`w-8 h-1 bg-black transition-transform transform ${
                  isOpen ? " origin-top-left" : ""
                }`}
              ></span>
              <span
                className={`w-8 h-1 bg-black transition-opacity ${
                  isOpen ? "opacity-1" : ""
                }`}
              ></span>
              <span
                className={`w-8 h-1 bg-black transition-transform transform ${
                  isOpen ? " origin-bottom-left" : ""
                }`}
              ></span>
            </div>

            {/* Background */}
            <div
              className={`nav-background fixed top-16 right-0 h-[calc(100vh-60px)]  z-5 transition-all ${
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
        </div>
      </header>
      <main className="p-8 mt-20">
        <h1 className="text-4xl font-bold mb-6">Guni Sports Academy</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Academy Announcement</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Cursus senectus pulvinar <br />
            amet arcu quam non. Ut non magna non quam vitae id blandit egestas <br />
            varius.
          </p>
        </section>
        <section className="flex">
          <div className="w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Drills & sessions</h2>
              <a href="#" className="text-blue-600">
                See All
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="src/assets/homepage/Rectangle 154.svg"
                  alt="Full Body Training"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Full Body Training</h3>
                  <p className="text-gray-600">
                    7:00 AM - 9:00 AM
                    <br />
                    Venue: Gym
                  </p>
                </div>
                <span className="ml-auto text-gray-400">4 Nov</span>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="src/assets/homepage/Rectangle 159.png"
                  alt="Football Drill"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Football Drill</h3>
                  <p className="text-gray-600">
                    10:00 AM - 11:00 AM
                    <br />
                    Venue: Football Ground
                  </p>
                </div>
                <span className="ml-auto text-gray-400">5 Nov</span>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="src/assets/homepage/Rectangle 161.png"
                  alt="Full Body Training"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Full Body Training</h3>
                  <p className="text-gray-600">
                    6:30 AM - 7:30 AM
                    <br />
                    Venue: Football Ground
                  </p>
                </div>
                <span className="ml-auto text-gray-400">5 Nov</span>
              </div>
            </div>
          </div>
          <section className="w-86 h-96 ml-24 flex justify-center items-center -mt-44">
        <div className="relative w-full h-full">
          {/* Current Image */}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-lg w-[800px] h-[400px] object-cover"
          />

          {/* Left Arrow */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={goToPrevious}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={goToNext}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 w-full flex justify-center space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-gray-400 opacity-50"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
          <button className="font-bold text-2xl ml-64 mt-5 bg-black text-white p-3 rounded-2xl" onClick={handleacademy}>GUNI Academy</button>
        </div>

     
      </section>
        </section>
      </main>
    </div>
  );
};

export default Navigation;
