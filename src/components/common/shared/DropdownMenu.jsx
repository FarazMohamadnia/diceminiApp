import React, { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-[#1D222E] text-white border border-green-500 rounded-3xl px-2 py-3 cursor-pointer"
      >
        <span className="font-semibold text-xs">{title}</span>
        <svg
          className={`w-4 h-4 text-white transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 bg-[#1D222E] border border-green-500 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "all" }}
      >
        <ul className="flex flex-col p-2 text-white">
          <li className="py-1 px-2 hover:bg-green-500 hover:text-black rounded">
            Game 1
          </li>
          <li className="py-1 px-2 hover:bg-green-500 hover:text-black rounded">
            Game 2
          </li>
          <li className="py-1 px-2 hover:bg-green-500 hover:text-black rounded">
            Game 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
