import React, { useState, useEffect, useRef } from "react";

const DropDownMenu = ({
  title = "Select your Currency",
  active = false,
  options = ["USD", "EUR", "GBP"],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);
  const containerRef = useRef(null);

  const baseClasses = `
    inline-flex items-center justify-between 
    rounded-full px-4 py-2 font-medium 
    border transition-colors duration-150 w-full
    focus:outline-none
  `;

  const stateClasses = active
    ? "bg-[#0F2B3E] text-white border-[#3BFFFF]"
    : "bg-transparent text-[#919191] border-[#1AE5A1] hover:bg-[#0F2B3E] hover:text-white";

  const style = !active
    ? {
        background:
          "radial-gradient(circle at center, #0F2B3E 40%, #000000 90%)",
        boxShadow: "inset 0 0 20px 0 rgba(26,229,161,0.5)",
      }
    : {};

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside of the containerRef element, close the dropdown
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add a click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      <button
        style={style}
        className={`${baseClasses} ${stateClasses}`}
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <svg
          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.27l3.71-3.08a.75.75 0 011.04 1.08l-4.25 3.53a.75.75 0 01-.98 0L5.2 8.27a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="
            absolute z-10 mt-2 w-full rounded-md bg-[#0F2B3E] 
            border border-[#1AE5A1] text-white
            shadow-[0_0_20px_0_rgba(26,229,161,0.5)]
            overflow-hidden
          "
        >
          {options.map((option) => (
            <li key={option}>
              <button
                className="
                  block w-full text-left px-4 py-2 hover:bg-[#1F4E63] 
                  transition-colors duration-150
                "
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
