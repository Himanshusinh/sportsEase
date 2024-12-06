import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mehsana from "../subpages/Mehsana";
import Gunisports from "../subpages/Gunisports";
import Karnavaticlub from "../subpages/Karnavaticlub";
import Rajpathclub from "../subpages/Rajpathclub";
import Vmssclub from "../subpages/Vmssclub";
import Presedency from "../subpages/Presedency";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeComponent, setActiveComponent] = useState(<Mehsana />); // Default component
  const [suggestions, setSuggestions] = useState([]);

  // Predefined suggestions mapped to components
  const componentMap = {
    Mehsana: <Mehsana />,
    Gunisports: <Gunisports />,
    Karnavaticlub: <Karnavaticlub />,
    Rajpathclub: <Rajpathclub />,
    Vmssclub: <Vmssclub />,
    Presedency: <Presedency />,
  };

  // Handle input changes for search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter suggestions based on the search term
    if (value === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = Object.keys(componentMap).filter((key) =>
        key.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  // Handle search click to show the corresponding component
  const handleSearchClick = (componentName) => {
    const componentToShow = componentMap[componentName];
    setActiveComponent(componentToShow);
    setSuggestions([]); // Hide suggestions after selection
    setSearchTerm(componentName); // Update search term to match the selected suggestion
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navigate = useNavigate();


  const handlemyprofile = () => {
    navigate('')
  }
  const handleproject = () => {
    navigate('')
  }
  const handleaboutus = () => {
    navigate('')
  }
  const handlesaifeatures = () => {
    navigate('/aifeatures');
  }

  return (
    <div>
      <header className="bg-[#FC7D65] p-8 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col">
          <div>
            <a className="ml-5 text-white cursor-pointer">Location</a>
          </div>
          <div className="flex items-center">
            <img
              className="w-3 mr-2"
              src="src/assets/homepage/location.svg"
              alt="Location Icon"
            />
            <span className="text-white">Mehsana, Gujarat</span>
            <img
              className="w-3 ml-2"
              src="src/assets/homepage/down.svg"
              alt="Dropdown Icon"
            />
            <img
              className="w-4 ml-5"
              src="src/assets/homepage/bell.svg"
              alt="Notification Icon"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center relative">
          <input
            className="w-96 rounded-2xl h-10 pl-3"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img
            className="w-5 -ml-10 cursor-pointer"
            src="src/assets/homepage/search.svg"
            alt="Search Icon"
            onClick={() => handleSearchClick(searchTerm)}
          />

          {/* Display Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg z-10">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion}
                  className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSearchClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="menu-wrapper relative">
          <div
            onClick={toggleMenu}
            className="hamburger flex flex-col space-y-1 cursor-pointer"
          >
            <span
              className={`w-8 h-1 bg-black transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-1 bg-black transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-8 h-1 bg-black transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>

          {/* Navigation Links */}
          <ul
            className={`nav-links fixed top-20 right-5 bg-white p-4 rounded-lg shadow-md z-10 list-none transform ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            } transition-all duration-300`}
          >
            <li className="py-2">
              <a
                className="text-black text-xl font-bold hover:text-gray-500"
                onClick={handlemyprofile}
              >
                My Profile
              </a>
            </li>
            <li className="py-2">
              <a
                onClick={handleproject}
                className="text-black text-xl font-bold hover:text-gray-500"
              >
                Project
              </a>
            </li>
            <li className="py-2">
              <a
                onClick={handleaboutus}
                className="text-black text-xl font-bold hover:text-gray-500"
              >
                About Us
              </a>
            </li>
            <li className="py-2">
              <a
                onClick={handlesaifeatures}
                className="text-black text-xl font-bold hover:text-gray-500"
              >
                Ai Features
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Display Component Below Navigation */}
      <div className="component-display mt-8">{activeComponent}</div>
    </div>
  );
};

export default Homepage;