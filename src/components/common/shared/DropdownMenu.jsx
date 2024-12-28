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
        className="flex w-[75px] justify-center items-center space-x-2 bg-[#1D222E] text-white border border-green-500 rounded-3xl px-2 py-1 cursor-pointer"
      >
        <span className="font-semibold text-xs">{title}</span>
        <svg className="mt-[3px]" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="vuesax/bold/arrow-down">
          <g id="arrow-down">
          <path id="Vector" d="M8.21334 3.74915H5.35792H2.78667C2.34667 3.74915 2.12667 4.28081 2.43834 4.59248L4.81251 6.96665C5.19292 7.34706 5.81167 7.34706 6.19209 6.96665L7.09501 6.06373L8.56626 4.59248C8.87334 4.28081 8.65334 3.74915 8.21334 3.74915Z" fill="white"/>
          </g>
          </g>
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
